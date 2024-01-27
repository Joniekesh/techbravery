import express from "express";

import { createMessage, getMessages } from "../controllers/message.js";
import { verifyToken } from "../middlewares/auth.js";
const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/", verifyToken, getMessages);

export default router;
