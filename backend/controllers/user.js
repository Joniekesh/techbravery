import User from "../models/User.js";
import createError from "../utils/createError.js";
import bcrypt from "bcryptjs";

// Update User (Admin) only
export const updateUser = async (req, res, next) => {
  const { firstname, lastname, email, password, country, phone, isAdmin } =
    req.body;

  try {
    // let user = await User.findById(req.params.id);

    // if (!user) {
    //   return next(createError(404, "User not found."));
    // }

    // user.firstname = firstname || user.firstname;
    // user.lastname = lastname || user.lastname;
    // user.email = email || user.email;
    // user.country = country || user.country;
    // user.phone = phone || user.phone;
    // user.isAdmin = isAdmin;

    // if (password) {
    //   const salt = await bcrypt.genSaltSync(10);
    //   const hashedPassword = await bcrypt.hashSync(password, salt);
    //   user.password = hashedPassword;
    // }

    // await user.save();

    // return res.status(200).json(user);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (updatedUser) {
      return res.status(200).json(updatedUser);
    }
  } catch (err) {
    next(err);
  }
};

// Get Users (Admin) Only
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (users.length > 0) {
      return res.status(200).json(users);
    } else {
      next(createError(404, "Users not found!"));
    }
  } catch (err) {
    next(err);
  }
};

// Get User (Admin) Only
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      return res.status(200).json(user);
    } else {
      next(createError(404, "User not found!"));
    }
  } catch (err) {
    next(err);
  }
};

// Delete User (Admin) Only
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (deletedUser) {
      return res.status(200).json("User deleted.");
    }
  } catch (err) {
    next(err);
  }
};
