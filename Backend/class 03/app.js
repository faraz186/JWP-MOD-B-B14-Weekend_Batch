import express from "express";
import mongoose from "mongoose";
import postModel from "./models/postSchema.js";
import userModel from "./models/userSchema.js";

const app = express();

const PORT = 6060;

const DB_URI = "mongodb+srv://admin:admin@cluster0.ocvg3.mongodb.net/";

mongoose.connect(DB_URI);

mongoose.connection.on("connected", () => {
  console.log("mongodb connect successfully..");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server up");
});

// get post API

// app.get("/getpost", async (req, res) => {
//   try {
//     const getData = await postModel.find({});

//     res.status(200).json({
//       message: "get post successful",
//       getData,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// create post api

// app.post("/createpost", async (req, res) => {
//   try {
//     const { title, desc } = req.body;

//     if (!title || !desc) {
//       res.status(400).json({
//         message: "required fields are missing",
//       });
//     }

//     let obj = {
//       title,
//       desc,
//     };

//     const saveData = await postModel.create(obj);

//     res.status(200).json({
//       message: "post create successfully",
//       saveData,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.put("/updatepost", async (req, res) => {
//   const { postId, title, desc } = req.body;

//   let updateObj = {
//     title,
//     desc,
//   };

//   await postModel.findByIdAndUpdate(postId, updateObj);

//   res.status(200).json({
//     message: "update post successfully",
//   });
// });

// app.delete("/deletepost/:id", async (req, res) => {
//   const { id } = req.params;

//   await postModel.findByIdAndDelete(id);

//   res.status(200).json({
//     message: "delete post successfully",
//   });
// });

app.post("/api/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({
      message: "required fields are missing..",
    });
  }

  let obj = {
    firstName,
    lastName,
    email,
    password,
  };

  const saveData = await userModel.create(obj);

  res.status(200).json({
    message: "signup successfully",
    saveData,
  });

  //   const emailExist = await userModel.find({email})

  res.json("create user");
});

app.post("/api/login", (req, res) => {
  res.json("login user");
});

app.listen(PORT, () => {
  console.log("server start");
});
