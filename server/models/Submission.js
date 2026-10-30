import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
  phone: { type: String, trim: true, maxlength: 40 },
  subject: { type: String, trim: true, maxlength: 200 },
  message: { type: String, trim: true, maxlength: 5000 },
  course: { type: String, trim: true, maxlength: 160 },
  status: { type: String, enum: ["New", "In progress", "Resolved"], default: "New" },
}, { timestamps: true, strict: true });

export const Inquiry = mongoose.model("Inquiry", submissionSchema);
export const Enrollment = mongoose.model("Enrollment", submissionSchema);
export const Challenge = mongoose.model("Challenge", submissionSchema);
