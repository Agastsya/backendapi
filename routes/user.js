import express from "express";
import { User } from "../models/user.js";
const router = express.Router();

router.get("/users/all", async (req, res) => {
  const users = await User.find({});

  //this is an industry standard when making an api
  res.status(201).json({
    // it is a good practice to provide status code in response
    success: true,
    users,
  });
});

router.get("/userid/:id", async (req, res) => {
  const { id } = req.params;

  // const users = await User.findById(id);

  const user = await User.findById(id);

  console.log(req.params);

  res.json({
    success: true,
    user,
  });
});

router.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;
  const users = await User.create({
    name,
    email,
    password,
  });
  res.cookie("tempi", "lol").json({
    success: true,
    users: [],
  });
});

export default router;
