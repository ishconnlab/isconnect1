import { Event } from "../models/Event.js";

export async function listEvents(_req, res) {
  const items = await Event.find().sort({ date: 1 }).lean();
  return res.json({ items: items.map(({ _id, ...item }) => ({ ...item, id: _id.toString() })) });
}
export async function listPublicEvents(_req, res) {
  const items = await Event.find().sort({ date: 1 }).lean();
  return res.json({ items: items.map(item => ({ ...item, id: item._id.toString() })) });
}
export async function createEvent(req, res) { return res.status(201).json({ item: await Event.create(req.body) }); }
export async function updateEvent(req, res) {
  const item = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return res.status(404).json({ error: "Event not found." });
  return res.json({ item });
}
export async function deleteEvent(req, res) {
  const item = await Event.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ error: "Event not found." });
  return res.json({ ok: true });
}
