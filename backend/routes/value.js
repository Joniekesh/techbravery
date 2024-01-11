import express from "express";
import {
  createValue,
  deleteValue,
  getValue,
  getValues,
  updateValue,
} from "../controllers/value.js";
import { admin, verifyToken } from "../middlewares/auth.js";
const router = express.Router();

router.post("/", verifyToken, admin, createValue);

router.put("/:id", verifyToken, admin, updateValue);
router.get("/find/:id", verifyToken, admin, getValue);
router.get("/", getValues);
router.delete("/:id", verifyToken, admin, deleteValue);

export default router;
