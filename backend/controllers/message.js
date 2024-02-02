import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
import User from "../models/User.js";
import createError from "../utils/createError.js";

// Create message
export const createMessage = async (req, res, next) => {
  const { text, img, chatId } = req.body;

  try {
    const chatMessage = new Message({
      chatId,
      sender: req.user.id,
      text,
      img,
    });

    const savedMessage = await chatMessage.save();

    if (savedMessage) {
      await Chat.findByIdAndUpdate(savedMessage.chatId, {
        latestMessage: savedMessage.text,
      });

      return res.status(200).json(savedMessage);
    }
  } catch (err) {
    next(err);
  }
};

// Get messages by chat ID
export const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find({ chatId: req.params.id });

    if (messages.length > 0) {
      return res.status(200).json(messages);
    } else {
      return next(createError(404, "Messages not found!"));
    }
  } catch (err) {
    next(err);
  }
};
