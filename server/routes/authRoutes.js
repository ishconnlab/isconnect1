import { Router } from "express";
import { changeCredentials, login } from "../controllers/authController.js";
import { requireAdmin } from "../middleware/requireAdmin.js";
const router = Router();
router.post("/login", login);
router.put("/credentials", requireAdmin, changeCredentials);
export default router;
