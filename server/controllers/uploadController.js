import { createHmac } from "node:crypto";

export function signCloudinaryUpload(_req, res) {
  const { CLOUDINARY_CLOUD_NAME: cloudName, CLOUDINARY_API_KEY: apiKey, CLOUDINARY_API_SECRET: apiSecret } = process.env;
  if (!cloudName || !apiKey || !apiSecret) return res.status(503).json({ error: "Cloudinary is not configured on the API." });
  const timestamp = Math.floor(Date.now() / 1000);
  const folder = "ishconnect/widgets";
  const signature = createHmac("sha1", apiSecret).update(`folder=${folder}&timestamp=${timestamp}`).digest("hex");
  return res.json({ cloudName, apiKey, timestamp, folder, signature });
}
