import express from "express";

import { verifyToken, admin, superAdmin } from "../middlewares/auth.js";
import { createChat, getChat, getChats } from "../controllers/chat.js";
const router = express.Router();

router.post("/", verifyToken, createChat);
router.get("/me", verifyToken, getChat);
router.get("/all", verifyToken, superAdmin, getChats);

export default router;
