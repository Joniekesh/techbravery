import createError from "../utils/createError.js";
import Chat from "../models/chat.js";
import Message from "../models/Message.js";

// Create Message
export const createMessage = async (req, res, next) => {
  const newMessage = new Message({
    sender: req.user.id,
    chatId: req.body.chatId,
    ...req.body,
  });

  try {
    const createdMessage = await newMessage.save();

    return res.status(201).json(createdMessage);
  } catch (err) {
    next(err);
  }
};

// Get Messages
export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ chatId: req.body.chatId });

    if (messages.length > 0) {
      return res.status(200).json(messages);
    } else {
      return next(createError(404, "Messages not found."));
    }
  } catch (err) {
    next(err);
  }
};
