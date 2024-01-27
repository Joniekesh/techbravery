import User from "../models/User.js";
import createError from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

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
  const { email, lastloginDetails } = req.body;

  try {
    const user = await User.findOne({ email });

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
        $set: {
          "lastloginDetails.time": lastloginDetails.time,
          "lastloginDetails.ip": lastloginDetails.ip,
          "lastloginDetails.op": lastloginDetails.os,
          "lastloginDetails.location": lastloginDetails.location,
          "lastloginDetails.timezone": lastloginDetails.timezone,
          "lastloginDetails.language": lastloginDetails.language,
          "lastloginDetails.browser": lastloginDetails.browser,
          "lastloginDetails.device": lastloginDetails.device,
          "lastloginDetails.date": Date.now(),
        },
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

// Forgot Password
export const forgotPassword = async (req, res, next) => {
  if (!req.body.email) {
    return next(createError(400, "Email is required."));
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return next(createError(404, "User not found!"));
    }

    if (user.email !== req.body.email) {
      return next(
        createError(
          404,
          `No user with email ${user.email} exists in the database.`
        )
      );
    }

    // Reset token generated and add hashed version to database
    const resetToken = user.getResetPasswordToken();

    await user.save();

    // Create Reset URL to email to provided email address
    // const resetUrl = `http://localhost:5173/resetpassword/${resetToken}`;
    const resetUrl = `https://techbravery.netlify.app/resetpassword/${resetToken}`;

    //HTML Message
    const message = `
  <h1>You have requested for a password reset.</h1>
  <p>Please reset your password using the following link:</p>
  <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
  `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request.",
        text: message,
      });

      return res
        .status(200)
        .json("Email sent. Please check your inbox for a reset link.");
    } catch (err) {
      await user.save();
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

// Reset Password
export const resetPassword = async (req, res, next) => {
  // Compare token in url to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.body.resetToken)
    .digest("hex");

  if (!req.body.password) {
    return next(createError(400, "Password is required."));
  }

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(
        createError(404, "Invalid/expired token. Please resend Reset Request.")
      );
    }

    user.password = req.body.password;
    user.resetPasswordToken = "";
    user.resetPasswordExpire = "";

    await user.save();

    return res.status(200).json("Password successfully updated.");
  } catch (err) {
    next(err);
  }
};

// Logout
export const logout = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");

    res.status(200).json("Logged out successfully");
  } catch (err) {
    next(err);
  }
};
