import express from "express";
import { User } from "../models/user.js";
import {
  getAllUsers,
  getUserId,
  login,
  register,
  getMyProfile,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/all", getAllUsers);

router.get("/userid/:id", getUserId);

//Register and Login API
router.post("/new", register);
router.post("/login", login);

//GET PROFILE API
router.get("/me", getMyProfile);

export default router;
