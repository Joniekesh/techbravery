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
import { toast } from "react-toastify";

const Chat = ({ setOpenChat, setActive, users, socket }) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  console.log(uploadedImageUrl);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file === "" || !text === "") {
      return toast.error("Image or text is required", { theme: "colored" });
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/joniekesh/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    setUploadedImageUrl(data.secure_url);

    const newMessage = {
      chatId: currentChat?._id,
      text,
      img: uploadedImageUrl,
    };

    dispatch(createMessage(newMessage));

    socket?.emit("sendMessage", {
      sender: currentUser._id,
      receiver: friend._id,
      text,
    });

    setText("");
    setFile("");
  };

  // console.log(currentChat?._id);

  return (
    <div className="chat">
      <div className="chatContainer" data-aos="fade-top">
        <div className="top">
          <div className="groupItems">
            <span className="icon">
              <FaArrowLeftLong
                onClick={() => {
                  dispatch(clearCurrentChat());
                  dispatch(clearMessages());
                }}
              />
            </span>

            {friend && (
              <div className="image">
                <img src="/assets/avatar.jpg" alt="" />
                {users.some((user) => user.userId === friend?._id) && (
                  <span className="online"></span>
                )}
              </div>
            )}
            <div className="texts">
              {currentUser.role === "SuperAdmin" ? (
                <span className="name">
                  {friend?.firstname} {friend?.lastname}
                </span>
              ) : (
                <span className="name">Support</span>
              )}
              {currentUser.role !== "SuperAdmin" && (
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
        {currentUser ? (
          !currentChat && chats.length > 0 ? (
            <ChatList currentChat={currentChat} users={users} />
          ) : (
            <div className="majorContent">
              <div className="chatbox">
                <ChatBox socket={socket} />
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
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <button type="submit">
                  <span>
                    <IoSendSharp />
                  </span>
                </button>
              </form>
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
