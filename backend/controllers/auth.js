import User from "../models/User.js";
import createError from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
export const register = async (req, res, next) => {
  const newUser = new User(req.body);

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return next(createError(400, "User already exist!"));
    }

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    next(err);
  }
};

// Login
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return next(createError(400, "Invalid Credentials"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...other } = user._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  } catch (err) {
    next(err);
  }
};
