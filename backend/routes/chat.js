import express from "express";

import { verifyToken } from "../middlewares/auth.js";
import { createChat, getChat } from "../controllers/chat.js";
const router = express.Router();

router.post("/", verifyToken, createChat);
router.get("/", verifyToken, getChat);

export default router;
