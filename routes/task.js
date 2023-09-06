import express from "express";
import { getMyTask, newTask } from "../controllers/taskController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/my", isAuthenticated, getMyTask);

export default router;
