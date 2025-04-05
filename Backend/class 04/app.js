import express from "express";
import mongoose from "mongoose";
import userModel from "./models/userSchema.js";
import bcrypt from "bcryptjs";
import cors from "cors";

const app = express();

const PORT = 5000 || 3000;

// body-parse

app.use(express.json());
app.use(cors());

// mongdb connection setup

const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.xyzcj.mongodb.net/";

mongoose.connect(MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log("mongodb connected..");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// signup api

app.post("/api/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({
      message: "Required fields are missing...",
    });
  }

  const emailExist = await userModel.findOne({ email });

  if (emailExist !== null) {
    res.status(404).json({
      message: "Email already exist..",
    });
  }

  const encrptPassword = await bcrypt.hash(password, 10);

  console.log(encrptPassword);

  //   create data on database

  let userObj = {
    firstName,
    lastName,
    email,
    password: encrptPassword,
  };

  const saveData = await userModel.create(userObj);

  res.status(200).json({
    message: "signup successfully..",
    saveData,
  });

  //   console.log(firstName, lastName, email, password);
});

// login api

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "Required fields are missing...",
    });
  }

  const emailExist = await userModel.findOne({ email });

  if (!emailExist) {
    res.status(400).json({
      message: "Invalid email & password",
    });
  }

  console.log(emailExist);

  const comparePassword = await bcrypt.compare(password, emailExist.password);

  if (!comparePassword) {
    res.status(400).json({
      message: "Invalid email & password",
    });
  }

  res.status(200).json({
    message: "login successfully",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http:localhost:${PORT}`);
});
