import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.js";
import { User } from "./models/user.js";

const app = express();
const router = express.Router();

// USING MIDDLEWARE
app.use(express.json());
app.use(userRouter); // Use cookie-parser middleware

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("NODE API'S");
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
