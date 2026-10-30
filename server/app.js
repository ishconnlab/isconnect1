import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import authRoutes from "./routes/authRoutes.js";
import submissionRoutes from "./routes/submissionRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import widgetRoutes from "./routes/widgetRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { requireAdmin } from "./middleware/requireAdmin.js";

const app = express();
const frontendDist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const frontendFile = path.join(frontendDist, "index.html");
const adminOrigins = [
  "https://ishconnect.rw",
  "https://www.ishconnect.rw",
  "https://ishconnlab.onrender.com",
  ...(process.env.ADMIN_ORIGIN?.split(",").map((origin) => origin.trim()).filter(Boolean) || []),
];
app.disable("x-powered-by");
app.use(cors({ origin: adminOrigins?.length ? adminOrigins : false }));
app.use(express.json({ limit: "32kb" }));
app.get("/api/health", (_req, res) => {
  const connected = mongoose.connection.readyState === 1;
  return res.status(connected ? 200 : 503).json({ status: connected ? "ok" : "unavailable", database: connected ? "connected" : "disconnected" });
});
app.use("/api/public", publicRoutes);
app.use("/api/admin", authRoutes);
app.use("/api/admin", requireAdmin);
app.use("/api/admin/events", eventRoutes);
app.use("/api/admin/widgets", widgetRoutes);
app.use("/api/admin/uploads", uploadRoutes);
app.use("/api/admin", submissionRoutes);
app.use("/api", (_req, res) => res.status(404).json({ error: "API route not found." }));
if (existsSync(frontendFile)) {
  app.use(express.static(frontendDist));
  app.get(/.*/, (_req, res) => res.sendFile(frontendFile));
} else {
  app.get("/", (_req, res) => res.json({ service: "IshConnect API", health: "/api/health" }));
  app.use((_req, res) => res.status(404).json({ error: "Frontend build not found; API is available under /api." }));
}
app.use((error, _req, res, _next) => {
  console.error(error);
  if (error instanceof mongoose.Error.ValidationError) return res.status(400).json({ error: "Please check the submitted details." });
  res.status(500).json({ error: "Something went wrong." });
});
export default app;
