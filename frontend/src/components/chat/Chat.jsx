import React, { useState } from "react";
import "./chat.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaArrowLeftLong, FaFileImage, FaPaperclip } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import ChatBox from "../chatbox/ChatBox";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Chat = ({ setOpenChat, setActive }) => {
  const handleClick = () => {
    setOpenChat((prev) => !prev);
    setActive((prev) => !prev);
  };

  const { currentUser } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chat">
      <div className="chatContainer" data-aos="fade-top">
        <div className="top">
          <span className="icon" onClick={handleClick}>
            <FaArrowLeftLong />
          </span>
          <span className="admin">Admin</span>
          <div className="image">
            <img src="/assets/myprofilepic.jpg" alt="" />
            <span className="online"></span>
          </div>
        </div>
        {currentUser ? (
          <div className="chatbox">
            <ChatBox />
          </div>
        ) : (
          <div className="denied">
            <span>
              OOPS! <br /> Please Sign In to view your messages or talk to an
              Admin!
            </span>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
        )}
        {currentUser && (
          <form onSubmit={handleSubmit}>
            <div className="sendContainer">
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <label htmlFor="imageFile" className="imageFile">
                <FaPaperclip />
              </label>
              <input type="file" id="imageFile" style={{ display: "none" }} />
            </div>
            <div type="submit">
              <span>
                <IoSendSharp />
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Chat;
