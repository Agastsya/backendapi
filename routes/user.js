import express from "express";
import { User } from "../models/user.js";
import {
  getAllUsers,
  getUserId,
  login,
  register,
  getMyProfile,
  logout,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.get("/all", getAllUsers);

router.get("/userid/:id", getUserId);

//Register and Login API
router.post("/new", register);
router.post("/login", login);

//GET PROFILE API
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", logout);

export default router;
