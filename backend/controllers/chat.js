import createError from "../utils/createError.js";
import Chat from "../models/chat.js";

// Create Chat
export const createChat = async (req, res, next) => {
  const newChat = new Chat({ members: [req.body] });

  try {
    const chat = await Chat.findOne({ members: { $in: [req.body] } });

    if (chat) {
      return next(
        createError(400, "You have already created chat with this user.")
      );
    }

    const createdChat = await newChat.save();

    return res.status(201).json(createdChat);
  } catch (err) {
    next(err);
  }
};

// Ge Chat of two peaple
export const getChat = async (req, res, next) => {
  const newChat = new Chat({ members: [req.body] });

  try {
    const chat = await Chat.findOne({
      members: { $all: [req.body.user1, req.body.user2] },
    });

    if (chat) {
      return next(createError(400, "Chat not found."));
    }

    return res.status(201).json(chat);
  } catch (err) {
    next(err);
  }
};
