import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";

config({
  path: "./data/config.env",
});

const app = express();
const router = express.Router();

// USING MIDDLEWARE
app.use(express.json());
app.use("/users", userRouter); // Use cookie-parser middleware

//CONNECTING TO DB USING MONGOOSE
connectDB();

app.get("/", (req, res) => {
  res.send("NODE API'S");
});

app.listen(process.env.PORT, () => {
  console.log("Server is up and running");
});
