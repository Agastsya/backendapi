import express from "express";
import { User } from "../models/user.js";
import {
  getAllUsers,
  getUserId,
  login,
  register,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/all", getAllUsers);

router.get("/userid/:id", getUserId);

router.post("/new", register);
router.post("/login", login);

export default router;
