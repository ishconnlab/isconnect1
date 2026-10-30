import { Router } from "express";
import { createEvent, deleteEvent, listEvents, updateEvent } from "../controllers/eventController.js";
const router = Router();
router.get("/", listEvents);
router.post("/", createEvent);
router.patch("/:id", updateEvent);
router.delete("/:id", deleteEvent);
export default router;
