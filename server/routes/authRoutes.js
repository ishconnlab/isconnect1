import { Router } from "express";
import {
  changeCredentials,
  getAdminRegistrationStatus,
  login,
  registerAdmin,
  setAdminRegistrationStatus,
} from "../controllers/authController.js";
import { requireAdmin } from "../middleware/requireAdmin.js";
const router = Router();
router.post("/login", login);
router.get("/registration", getAdminRegistrationStatus);
router.post("/register", registerAdmin);
router.put("/registration", requireAdmin, setAdminRegistrationStatus);
router.put("/credentials", requireAdmin, changeCredentials);
export default router;
