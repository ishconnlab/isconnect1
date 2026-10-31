import mongoose from "mongoose";
import { connectDatabase } from "../server/config/database.js";
import { seedAdminFromEnvironment } from "../server/controllers/authController.js";

const email = process.env.ADMIN_EMAIL?.trim();
const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
const validPasswordHash = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(passwordHash || "");
const hasPlainPassword = typeof process.env.ADMIN_PASSWORD === "string" && process.env.ADMIN_PASSWORD.trim().length > 0;

if (!process.env.MONGODB_URI || !email || (!hasPlainPassword && !validPasswordHash)) {
  throw new Error("Set MONGODB_URI, ADMIN_EMAIL, and either ADMIN_PASSWORD or a valid bcrypt ADMIN_PASSWORD_HASH before seeding.");
}
if (hasPlainPassword && !process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET must be configured when ADMIN_PASSWORD is used.");
}

try {
  await connectDatabase();
  await seedAdminFromEnvironment();
  console.log("Admin seed completed.");
} catch (error) {
  const message = error instanceof Error ? error.message : "Unknown error";
  console.error(`Admin seed failed: ${message.replace(process.env.MONGODB_URI, "[redacted MongoDB URI]")}`);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}
