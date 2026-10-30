import { Router } from "express";
import { getSummary, listSubmissions, updateSubmission } from "../controllers/submissionController.js";
const router = Router();
router.get("/summary", getSummary);
router.get("/:collection", listSubmissions);
router.patch("/:collection/:id", updateSubmission);
export default router;
