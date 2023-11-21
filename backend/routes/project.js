import express from "express";
import {
  createProject,
  getProjects,
  getProject,
  getFeaturedProjects,
  updateProject,
  deleteProject,
} from "../controllers/project.js";
import { verifyToken, admin } from "../middlewares/auth.js";
const router = express.Router();

router.post("/", verifyToken, admin, createProject);
router.get("/", getProjects);
router.get("/find/:id", getProject);
router.get("/featured", getFeaturedProjects);
router.put("/:id", verifyToken, admin, updateProject);
router.delete("/:id", verifyToken, admin, deleteProject);

export default router;
