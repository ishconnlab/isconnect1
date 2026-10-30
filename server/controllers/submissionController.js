import { Challenge, Enrollment, Inquiry } from "../models/Submission.js";
import { Event } from "../models/Event.js";

const collections = { inquiries: Inquiry, enrollments: Enrollment, challenges: Challenge };
export async function listSubmissions(req, res) {
  const Model = collections[req.params.collection];
  if (!Model) return res.status(404).json({ error: "Collection not found." });
  const items = await Model.find().sort({ createdAt: -1 }).limit(500).lean();
  return res.json({ items });
}
export async function updateSubmission(req, res) {
  const Model = collections[req.params.collection];
  if (!Model) return res.status(404).json({ error: "Collection not found." });
  const item = await Model.findByIdAndUpdate(req.params.id, { status: req.body?.status }, { new: true, runValidators: true });
  if (!item) return res.status(404).json({ error: "Record not found." });
  return res.json({ item });
}
export async function createPublicSubmission(req, res) {
  const Model = collections[req.params.collection];
  if (!Model) return res.status(404).json({ error: "Collection not found." });
  const data = req.body || {};
  if (typeof data.name !== "string" || typeof data.email !== "string" || !data.name.trim() || !data.email.includes("@")) return res.status(400).json({ error: "Name and a valid email are required." });
  const item = await Model.create({ name: data.name, email: data.email, phone: data.phone, subject: data.subject || data.course, course: data.course, message: data.message });
  return res.status(201).json({ ok: true, id: item.id });
}
export async function getSummary(_req, res) {
  const [inquiries, enrollments, challenges, events, newInquiries] = await Promise.all([
    Inquiry.countDocuments(), Enrollment.countDocuments(), Challenge.countDocuments(), Event.countDocuments(), Inquiry.countDocuments({ status: "New" }),
  ]);
  return res.json({ inquiries, enrollments, challenges, events, newInquiries });
}
