import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { createHash, createHmac } from "node:crypto";
import { Admin } from "../models/Admin.js";

const REGISTRATION_SETTINGS_ID = "admin-registration-v1";

function validPasswordHash(hash) {
  return /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(hash || "");
}

async function getRegistrationSettings() {
  const settings = Admin.db.collection("admin_settings");
  let registration = await settings.findOne({ _id: REGISTRATION_SETTINGS_ID });
  if (!registration) {
    await settings.updateOne(
      { _id: REGISTRATION_SETTINGS_ID },
      { $setOnInsert: { enabled: true, configuredByAdmin: false } },
      { upsert: true },
    );
  } else if (typeof registration.configuredByAdmin !== "boolean") {
    await settings.updateOne(
      { _id: REGISTRATION_SETTINGS_ID, configuredByAdmin: { $exists: false } },
      { $set: { enabled: true, configuredByAdmin: false } },
    );
  }
  registration = await settings.findOne({ _id: REGISTRATION_SETTINGS_ID });
  return registration;
}

function signAdmin(admin) {
  return jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { subject: admin._id.toString(), expiresIn: "8h" });
}

export async function getAdminRegistrationStatus(_req, res) {
  const settings = await getRegistrationSettings();
  return res.json({ enabled: settings.enabled === true });
}

export async function registerAdmin(req, res) {
  const { email, password } = req.body || {};
  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail) || normalizedEmail.length > 254) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }
  if (typeof password !== "string" || password.length < 10) {
    return res.status(400).json({ error: "Choose a password with at least 10 characters." });
  }
  if (Buffer.byteLength(password, "utf8") > 72) {
    return res.status(400).json({ error: "Password must not exceed 72 UTF-8 bytes." });
  }
  if (!process.env.JWT_SECRET) {
    return res.status(503).json({ error: "Admin authentication is not configured correctly on the server." });
  }

  const registration = await getRegistrationSettings();
  if (registration.enabled !== true) {
    return res.status(403).json({ error: "Admin registration is currently disabled." });
  }

  try {
    const admin = await Admin.create({
      email: normalizedEmail,
      passwordHash: await bcrypt.hash(password, 12),
    });
    return res.status(201).json({ token: signAdmin(admin), email: admin.email });
  } catch (error) {
    if (error?.code === 11000) return res.status(409).json({ error: "An admin account with that email already exists." });
    throw error;
  }
}

export async function setAdminRegistrationStatus(req, res) {
  const { enabled } = req.body || {};
  if (typeof enabled !== "boolean") {
    return res.status(400).json({ error: "Registration status must be enabled or disabled." });
  }
  await Admin.db.collection("admin_settings").updateOne(
    { _id: REGISTRATION_SETTINGS_ID },
    { $set: { enabled, configuredByAdmin: true, updatedAt: new Date() } },
    { upsert: true },
  );
  return res.json({ enabled });
}

export async function seedAdminFromEnvironment() {
  const bootstrap = Admin.db.collection("admin_bootstrap");
  const markerId = "initial-admin-credentials-v1";
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const plainPassword = process.env.ADMIN_PASSWORD;
  const configuredPasswordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  const usePlainPassword = typeof plainPassword === "string" && plainPassword.trim().length > 0;
  if (!email || (!usePlainPassword && !validPasswordHash(configuredPasswordHash))) {
    console.warn("Admin credential seeding skipped: configure ADMIN_EMAIL and either ADMIN_PASSWORD or a valid bcrypt ADMIN_PASSWORD_HASH.");
    return;
  }
  if (usePlainPassword && Buffer.byteLength(plainPassword, "utf8") > 72) {
    throw new Error("ADMIN_PASSWORD cannot exceed 72 UTF-8 bytes when bcrypt is used.");
  }
  if (usePlainPassword && !process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be configured when ADMIN_PASSWORD is used.");
  }
  const credentialFingerprint = usePlainPassword
    ? createHmac("sha256", process.env.JWT_SECRET).update(`${email}:${plainPassword}`).digest("hex")
    : createHash("sha256").update(`${email}:${configuredPasswordHash}`).digest("hex");
  const marker = await bootstrap.findOne({ _id: markerId });
  if (marker?.credentialFingerprint === credentialFingerprint) return;
  const passwordHash = usePlainPassword
    ? await bcrypt.hash(plainPassword, 12)
    : configuredPasswordHash;
  try {
    const now = new Date();
    await Admin.updateOne(
      { email },
      { $set: { passwordHash, updatedAt: now }, $setOnInsert: { email, createdAt: now } },
      { upsert: true },
    );
    await bootstrap.updateOne(
      { _id: markerId },
      { $set: { seededAt: now, email, credentialFingerprint } },
      { upsert: true },
    );
    console.log("Initial admin credentials seeded in MongoDB");
  } catch (error) {
    if (error?.code !== 11000) throw error;
  }
}

export async function login(req, res) {
  const { email, password } = req.body || {};
  if (!process.env.JWT_SECRET) return res.status(503).json({ error: "Admin authentication is not configured correctly on the server." });
  const admin = typeof email === "string" ? await Admin.findOne({ email: email.trim().toLowerCase() }) : null;
  let validPassword = false;
  try {
    validPassword = Boolean(admin && typeof password === "string" && await bcrypt.compare(password, admin.passwordHash));
  } catch {
    return res.status(503).json({ error: "Admin authentication is not configured correctly on the server." });
  }
  if (!validPassword) return res.status(401).json({ error: "Email or password is incorrect." });
  return res.json({ token: signAdmin(admin) });
}

export async function changeCredentials(req, res) {
  const { currentPassword, email, newPassword } = req.body || {};
  if (typeof email !== "string" || !email.trim() || typeof newPassword !== "string" || newPassword.length < 10) {
    return res.status(400).json({ error: "Enter a valid email and a password of at least 10 characters." });
  }
  const admin = mongoose.Types.ObjectId.isValid(req.adminId)
    ? await Admin.findById(req.adminId)
    : await Admin.findOne({ email: req.adminId?.toLowerCase() });
  if (!admin || typeof currentPassword !== "string" || !(await bcrypt.compare(currentPassword, admin.passwordHash))) {
    return res.status(401).json({ error: "Current password is incorrect." });
  }
  admin.email = email.trim().toLowerCase();
  admin.passwordHash = await bcrypt.hash(newPassword, 12);
  try {
    await admin.save();
  } catch (error) {
    if (error?.code === 11000) return res.status(409).json({ error: "That admin email is already in use." });
    throw error;
  }
  return res.json({ token: signAdmin(admin), email: admin.email });
}
