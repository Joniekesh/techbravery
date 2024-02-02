import createError from "../utils/createError.js";
import Chat from "../models/Chat.js";
import User from "../models/User.js";

// Create chat
export const createChat = async (req, res, next) => {
  const { clientId } = req.body;

  try {
    const superAdmin = await User.findOne({ role: "SuperAdmin" });

    if (superAdmin) {
      const chat = await Chat.find({
        members: { $all: [clientId, superAdmin._id] },
      });

      if (chat.length > 0) {
        return res.status(200).json(chat);
      } else {
        const newChat = new Chat({ members: [clientId, superAdmin._id] });
        const createdChat = await newChat.save();
        return res.status(200).json(createdChat);
      }
    }
  } catch (err) {
    next(err);
  }
};

// Get chats between client and admin
export const getChat = async (req, res, next) => {
  try {
    const chats = await Chat.find({
      members: { $all: [req.user.id] },
    }).populate("members", "firstname lastname");

    if (!chats) {
      return next(createError(400, "Chats not found."));
    }

    return res.status(200).json(chats);
  } catch (err) {
    next(err);
  }
};

// Get logged in user chat/s (Client or Admin)
export const getChats = async (req, res, next) => {
  try {
    const chats = await Chat.find({
      members: { $in: [req.user.id] },
    }).populate("members", "firstname lastname");

    if (!chats) {
      return next(createError(400, "Chats not found."));
    }

    return res.status(201).json(chats);
  } catch (err) {
    next(err);
  }
};
