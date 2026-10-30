import { Widget } from "../models/Widget.js";
import { createHmac } from "node:crypto";

async function deleteCloudinaryAsset(publicId) {
  const { CLOUDINARY_CLOUD_NAME: cloudName, CLOUDINARY_API_KEY: apiKey, CLOUDINARY_API_SECRET: apiSecret } = process.env;
  if (!publicId || !cloudName || !apiKey || !apiSecret) return;
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = createHmac("sha1", apiSecret).update(`public_id=${publicId}&timestamp=${timestamp}`).digest("hex");
  const body = new URLSearchParams({ public_id: publicId, timestamp: String(timestamp), api_key: apiKey, signature });
  await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, { method: "POST", body });
}

export async function listWidgets(req, res) {
  const isAdmin = req.baseUrl.startsWith("/api/admin");
  const filter = isAdmin ? {} : { published: true, $or: [{ page: req.query.page || "home" }, { page: "all" }] };
  return res.json({ items: await Widget.find(filter).sort({ order: 1, createdAt: 1 }).lean() });
}
export async function createWidget(req, res) { return res.status(201).json({ item: await Widget.create(req.body) }); }
export async function updateWidget(req, res) {
  const previous = await Widget.findById(req.params.id);
  if (!previous) return res.status(404).json({ error: "Widget not found." });
  const item = await Widget.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return res.status(404).json({ error: "Widget not found." });
  if (previous.imagePublicId && previous.imagePublicId !== item.imagePublicId) await deleteCloudinaryAsset(previous.imagePublicId).catch(() => undefined);
  return res.json({ item });
}
export async function deleteWidget(req, res) {
  const item = await Widget.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ error: "Widget not found." });
  await deleteCloudinaryAsset(item.imagePublicId).catch(() => undefined);
  return res.json({ ok: true });
}
