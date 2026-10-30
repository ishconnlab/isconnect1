import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function login(req, res) {
  const { email, password } = req.body || {};
  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  const jwtSecret = process.env.JWT_SECRET;
  if (!adminEmail || !/^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(passwordHash || "") || !jwtSecret) {
    return res.status(503).json({ error: "Admin authentication is not configured correctly on the server." });
  }
  const validEmail = typeof email === "string" && email.trim().toLowerCase() === adminEmail.toLowerCase();
  let validPassword = false;
  try {
    validPassword = typeof password === "string" && await bcrypt.compare(password, passwordHash);
  } catch {
    return res.status(503).json({ error: "Admin authentication is not configured correctly on the server." });
  }
  if (!validEmail || !validPassword) return res.status(401).json({ error: "Email or password is incorrect." });
  return res.json({ token: jwt.sign({ sub: adminEmail.toLowerCase(), role: "admin" }, jwtSecret, { expiresIn: "8h" }) });
}
