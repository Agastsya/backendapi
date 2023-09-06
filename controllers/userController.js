import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendCookie } from "../utils/features.js";

export const getAllUsers = async (req, res) => {};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "Account Doesn't Exists",
    });
  }

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

  if (userStatus)
    return res.status(404).json({
      success: false,
      message: "Account Already Exists",
    });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashedPassword });

  sendCookie(user, res, "Registered Successfully", 201);
};

export const getMyProfile = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(404).json({
      success: false,
      messge: "Not Logged In",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded._id);

  res.status(200).json({
    success: true,
    user,
  });
};

export const getUserId = async (req, res) => {};
