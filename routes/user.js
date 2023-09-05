import express from "express";
import { User } from "../models/user.js";
import {
  getAllUsers,
  getUserId,
  register,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/all", getAllUsers);

router.get("/userid/:id", getUserId);

router.post("/new", register);

export default router;
