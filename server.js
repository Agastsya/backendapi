const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
  res.send("NODE API'S");
});

app.get("/users/all", async (req, res) => {
  res.json({
    success: true,
    users: [],
  });
});

app.post("/users/new", async (req, res) => {
  const users = await User.create({
    name: "ajmaax",
    email: "hello@gmail.com",
    password: "helloworld",
  });
  res.json({
    success: true,
    users: [],
  });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
