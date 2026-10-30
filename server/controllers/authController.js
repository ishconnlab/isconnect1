import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function login(req, res) {
  const { email, password } = req.body || {};
  if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD_HASH || !process.env.JWT_SECRET) return res.status(503).json({ error: "Admin authentication is not configured on the server." });
  const validEmail = typeof email === "string" && email.toLowerCase() === process.env.ADMIN_EMAIL.toLowerCase();
  const validPassword = typeof password === "string" && await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
  if (!validEmail || !validPassword) return res.status(401).json({ error: "Email or password is incorrect." });
  return res.json({ token: jwt.sign({ sub: email.toLowerCase(), role: "admin" }, process.env.JWT_SECRET, { expiresIn: "8h" }) });
}
