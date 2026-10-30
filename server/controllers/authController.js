import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { Admin } from "../models/Admin.js";

function validPasswordHash(hash) {
  return /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(hash || "");
}

function signAdmin(admin) {
  return jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { subject: admin._id.toString(), expiresIn: "8h" });
}

export async function seedAdminFromEnvironment() {
  const bootstrap = Admin.db.collection("admin_bootstrap");
  const markerId = "initial-admin-credentials-v1";
  if (await bootstrap.findOne({ _id: markerId })) return;
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  if (!email || !validPasswordHash(passwordHash)) {
    console.warn("No admin exists in MongoDB and valid ADMIN_EMAIL / ADMIN_PASSWORD_HASH are not configured; admin login is disabled until configured.");
    return;
  }
  try {
    const now = new Date();
    await Admin.updateOne(
      { email },
      { $set: { passwordHash, updatedAt: now }, $setOnInsert: { email, createdAt: now } },
      { upsert: true },
    );
    await bootstrap.updateOne(
      { _id: markerId },
      { $setOnInsert: { seededAt: now, email } },
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
