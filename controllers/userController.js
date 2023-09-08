import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res) => {};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!task) return next(new Error("Account Doesn't Exist", 404));

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(404).json({
      success: false,
      message: "Password is wrong Try Again",
    });
  }

  sendCookie(user, res, `Welcome Back, ${user.name}`, 200);
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userStatus = await User.findOne({ email });

  if (!task) return next(new Error("Account Already Exists", 404));

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, "Registered Successfully", 201);
};

export const getMyProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = async (req, res) => {
  res
    .cookie("token", "", {
      expires: new Date(Date.now()),
    })
    .json({
      success: "true",
      message: "logged out",
    });
};

export const getUserId = () => {};
