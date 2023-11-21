import createError from "../utils/createError.js";
import Project from "../models/Project.js";

// Create project
export const createProject = async (req, res, next) => {
  const newProject = new Project(req.body);

  try {
    const createdProject = await newProject.save();

    res.status(201).json(createdProject);
  } catch (err) {
    next(err);
  }
};

// Get all projects
export const getProjects = async (req, res, next) => {
  const { type } = req.query;

  try {
    const projects = await Project.find(type && { type: req.query.type });

    if (!projects) {
      return next(createError(404, "Projects not found."));
    }

    res.status(201).json(projects);
  } catch (err) {
    next(err);
  }
};

// Get a single project
export const getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return next(createError(404, "Project not found."));
    }

    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
};

// Get a single project
export const getFeaturedProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({ isFeatured: true });

    if (!projects) {
      return next(createError(404, "Projects not found."));
    }

    res.status(201).json(projects);
  } catch (err) {
    next(err);
  }
};

// Update project
export const updateProject = async (req, res, next) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(201).json(updatedProject);
  } catch (err) {
    next(err);
  }
};
// Delete project
export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json("Project deleted.");
  } catch (err) {
    next(err);
  }
};
