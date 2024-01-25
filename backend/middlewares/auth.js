import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
import User from "../models/User.js";

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT, async (err, payload) => {
    if (err) return next(createError(403, "Token is not valid!"));

    const user = await User.findById(payload.id);

    if (!user) {
      return next(createError(404, "User not found."));
    }

    req.user = user;

    next();
  });
};

const superAdmin = (req, res, next) => {
  if (req.user && req.user.role === "SuperAdmin") {
    return next();
  } else {
    return next(
      createError(401, "You are not authorized to access this route.")
    );
  }
};
const admin = (req, res, next) => {
  if (req.user && req.user.role === "Admin") {
    return next();
  } else {
    return next(
      createError(401, "You are not authorized to access this route.")
    );
  }
};

export { verifyToken, superAdmin, admin };
