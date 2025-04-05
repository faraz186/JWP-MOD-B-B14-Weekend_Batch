import userModel from "../models/userSchema.js";
import bcrypt from "bcryptjs";
export const signupController = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};
