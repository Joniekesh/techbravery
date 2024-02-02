import React, { useEffect, useRef, useState } from "react";
import "./chat.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowLeftLong, FaFileImage, FaPaperclip } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import ChatBox from "../chatbox/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createMessage, getMessages } from "../../redux/actions/MessageAction";
import { clearCurrentChat } from "../../redux/reducers/ChatReducer";
import ChatList from "../chatList/ChatList";
import { clearMessages } from "../../redux/reducers/MessageReducer";

const Chat = ({ setOpenChat, setActive }) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const chatRef = useRef();

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { currentChat, chats } = useSelector((state) => state.chat);

  const friend = currentChat?.members.find(
    (member) => member._id !== currentUser._id
  );

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleClick = () => {
    setOpenChat((prev) => !prev);
    setActive((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      chatId: currentChat?._id,
      text,
    };

    dispatch(createMessage(newMessage));
    // currentChat?._id && dispatch(getMessages(currentChat?._id));

    setText("");
  };

  // console.log(currentChat?._id);

  return (
    <div className="chat">
      <div className="chatContainer" data-aos="fade-top">
        <div className="top">
          <span className="icon">
            <FaArrowLeftLong
              onClick={() => {
                dispatch(clearCurrentChat());
                dispatch(clearMessages());
              }}
            />
          </span>
          <span className="admin">
            {friend?.firstname} {friend?.lastname}
          </span>
          {/* <div className="image">
            <img src="/assets/myprofilepic.jpg" alt="" />
            <span className="online"></span>
          </div> */}
          <span className="closeBtn">
            <IoMdClose onClick={handleClick} />
          </span>
        </div>
        {currentUser ? (
          !currentChat && chats.length > 0 ? (
            <ChatList currentChat={currentChat} />
          ) : (
            <>
              <div className="chatbox">
                <ChatBox />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="sendContainer">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                  <label htmlFor="imageFile" className="imageFile">
                    <FaPaperclip />
                  </label>
                  <input
                    type="file"
                    id="imageFile"
                    style={{ display: "none" }}
                  />
                </div>
                <button type="submit">
                  <span>
                    <IoSendSharp />
                  </span>
                </button>
              </form>
            </>
          )
        ) : (
          <div className="denied">
            <span>
              OOPS! <br /> Please Sign In to view your chats or start a
              conversation with an Admin!
            </span>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
