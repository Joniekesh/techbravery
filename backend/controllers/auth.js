import User from "../models/User.js";
import createError from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register
export const register = async (req, res, next) => {
  const newUser = new User(req.body);

  if (req.body.password.length < 6) {
    return next(
      createError(400, "A valid password of 6 or more characters is required!")
    );
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      return next(
        createError(400, `A user with email: ${user.email} already exist!`)
      );
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

    const updatedUser = await User.findOneAndUpdate(
      user._id,
      {
        $set: { lastlogin: Date.now() },
      },
      { new: true }
    );

    const token = jwt.sign({ id: updatedUser._id }, process.env.JWT);
    const { password, ...other } = updatedUser._doc;

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
