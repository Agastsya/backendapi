const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

// USING MIDDLEWARE
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware

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

app.get("/userid/:id", async (req, res) => {
  const { id } = req.params;

  // const users = await User.findById(id);

  const user = await User.findById(id);

  console.log(req.params);

  res.json({
    success: true,
    user,
  });
});

app.get("/users/all", async (req, res) => {
  const users = await User.find({});

  //this is an industry standard when making an api
  res.status(201).json({
    // it is a good practice to provide status code in response
    success: true,
    users,
  });
});

app.post("/users/new", async (req, res) => {
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

app.listen(3000, () => {
  console.log("Server is up and running");
});
