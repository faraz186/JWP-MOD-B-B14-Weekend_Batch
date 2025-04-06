import userModel from "../models/userSchema.js";

export const getallusers = async (req, res) => {
  try {
    const data = await userModel.find({});

    res.status(200).json({
      message: "get all users successful",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
