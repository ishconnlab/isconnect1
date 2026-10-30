import { Router } from "express";
import { createPublicSubmission } from "../controllers/submissionController.js";
import { listPublicEvents } from "../controllers/eventController.js";
import { listWidgets } from "../controllers/widgetController.js";
const router = Router();
router.get("/events", listPublicEvents);
router.get("/widgets", listWidgets);
router.post("/:collection", createPublicSubmission);
export default router;
