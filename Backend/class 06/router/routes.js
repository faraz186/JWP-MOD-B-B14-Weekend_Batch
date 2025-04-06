import express from "express";
import { signupController } from "../controller/signupController.js";
import { LoginController } from "../controller/loginController.js";
import { getallusers } from "../controller/getAllUsersController.js";
import { tokenVerification } from "../middleware/middleware.js";

const router = express.Router();

router.route("/api/signup").post(signupController);
router.route("/api/login").post(LoginController);
router.route("/api/getallusers").get(tokenVerification, getallusers);

export default router;
