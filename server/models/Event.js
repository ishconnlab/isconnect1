import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  type: { type: String, enum: ["bootcamp", "meetup", "workshop", "hackathon"], default: "workshop" },
  title: { type: String, required: true, trim: true, maxlength: 160 },
  date: { type: String, required: true }, time: { type: String, default: "" },
  location: { type: String, required: true, trim: true, maxlength: 180 },
  summary: { type: String, trim: true, maxlength: 1000 },
  link: { type: String, trim: true, maxlength: 500, match: [/^(https?:\/\/|\/)/, "Link must be a local path or an http(s) URL"] },
}, { timestamps: true });

export const Event = mongoose.model("Event", eventSchema);
