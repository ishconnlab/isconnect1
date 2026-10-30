import jwt from "jsonwebtoken";

export function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace(/^Bearer\s+/i, "");
  try {
    const payload = jwt.verify(token || "", process.env.JWT_SECRET);
    if (payload.role !== "admin") throw new Error("Invalid role");
    next();
  } catch {
    res.status(401).json({ error: "Please sign in to continue." });
  }
}
