import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, maxlength: 254 },
  passwordHash: { type: String, required: true },
}, { timestamps: true });

export const Admin = mongoose.model("Admin", adminSchema);
