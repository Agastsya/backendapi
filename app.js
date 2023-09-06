import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { connectDB } from "./data/database.js";
import { config } from "dotenv";
import { errorHandler } from "./middlewares/error.js";

config({
  path: "./data/config.env",
});

const app = express();
const router = express.Router();

// USING MIDDLEWARE
app.use(express.json());
app.use(cookieParser());

//USING ROUTES
app.use("/api/v1/users", userRouter); // Use cookie-parser middleware
app.use("/api/v1/tasks", taskRouter);

//CONNECTING TO DB USING MONGOOSE
connectDB();

app.get("/", (req, res) => {
  res.send("NODE API'S");
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server is up and running");
});
