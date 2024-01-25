import express from "express";
import {
  register,
  login,
  forgotPassword,
  resetPassword,
  logout,
} from "../controllers/auth.js";
const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.put("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);
router.post("/logout", logout);

export default router;
