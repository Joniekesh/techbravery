import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.js";
import { admin, verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.put("/:id", verifyToken, admin, updateUser);
router.get("/find/:id", verifyToken, admin, getUser);
router.get("/", verifyToken, admin, getUsers);
router.delete("/:id", verifyToken, admin, deleteUser);

export default router;
