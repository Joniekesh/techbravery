import express from "express";

import { verifyToken } from "../middlewares/auth.js";
import { createMessage, getMessages } from "../controllers/message.js";
const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/find/:id", verifyToken, getMessages);

export default router;
