import mongoose from "mongoose";

const widgetSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 120 },
  description: { type: String, trim: true, maxlength: 1000, default: "" },
  eyebrow: { type: String, trim: true, maxlength: 60, default: "" },
  imageUrl: { type: String, trim: true, maxlength: 1000, default: "" },
  imagePublicId: { type: String, trim: true, maxlength: 200, default: "" },
  link: { type: String, trim: true, maxlength: 500, default: "", match: [/^(https?:\/\/|\/)/, "Link must be a local path or an http(s) URL"] },
  actionLabel: { type: String, trim: true, maxlength: 50, default: "Learn more" },
  page: { type: String, enum: ["home", "services", "work", "about", "team", "challenges", "academy", "founder", "devqueens", "iconnbook", "contact", "all"], default: "home", index: true },
  order: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
}, { timestamps: true });

export const Widget = mongoose.model("Widget", widgetSchema);
