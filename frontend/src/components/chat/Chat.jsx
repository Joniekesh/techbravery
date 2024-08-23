import React, { useEffect, useRef } from "react";
import "./chat.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import ChatBox from "../chatbox/ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createMessage, getMessages } from "../../redux/actions/MessageAction";
import {
  clearCurrentChat,
  setOpenChat,
} from "../../redux/reducers/ChatReducer";
import ChatList from "../chatList/ChatList";
import { clearMessages } from "../../redux/reducers/MessageReducer";
import Form from "../form/Form";

// ..
AOS.init({
  // throttleDelay: 300,
  duration: 2000,
});

const Chat = ({ users, socket }) => {
  const chatRef = useRef();

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { currentChat, chats } = useSelector((state) => state.chat);

  const friend = currentChat?.members.find(
    (member) => member?._id !== currentUser?._id
  );

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleClick = () => {
    dispatch(setOpenChat());
  };

  // console.log(currentChat?._id);

  return (
    <div className="chat">
      <div className="chatContainer" data-aos="fade-top">
        <div className="top">
          <div className="groupItems">
            {currentUser?.role === "SuperAdmin" && (
              <span className="icon">
                <FaArrowLeftLong
                  onClick={() => {
                    dispatch(clearCurrentChat());
                    dispatch(clearMessages());
                  }}
                />
              </span>
            )}

            {friend && (
              <div className="image">
                <img src="/assets/avatar.jpg" alt="" />
                {users?.some((user) => user?.userId === friend?._id) && (
                  <span className="online"></span>
                )}
              </div>
            )}
            <div className="texts">
              {currentUser?.role === "SuperAdmin" ? (
                <span className="name">
                  {friend?.firstname} {friend?.lastname}
                </span>
              ) : (
                <span className="name">Support</span>
              )}
              {currentUser?.role !== "SuperAdmin" && (
                <div className="response">
                  <span className="dot"></span>
                  <span className="replyText">We reply immediately</span>
                </div>
              )}
            </div>
          </div>
          <span className="closeBtn">
            <IoMdClose onClick={handleClick} />
          </span>
        </div>
        <div className="chatBox"></div>

        {currentUser ? (
          // !currentChat && chats.length > 0 ?
          currentUser?.role === "SuperAdmin" ? (
            currentChat ? (
              <div className="majorContent">
                <div className="chatbox">
                  <ChatBox socket={socket} />
                </div>
                <Form socket={socket} />
              </div>
            ) : (
              <div className="majorContent">
                <ChatList users={users} />
              </div>
            )
          ) : (
            <div className="majorContent">
              <div className="chatbox">
                <ChatBox socket={socket} />
              </div>
              <Form socket={socket} />
            </div>
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
