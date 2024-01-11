import express from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.js";
const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.put("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

export default router;
