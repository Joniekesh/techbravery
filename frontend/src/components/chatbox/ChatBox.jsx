import "./chatBox.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { format } from "timeago.js";
import { getMessages } from "../../redux/actions/MessageAction";

const ChatBox = ({ socket }) => {
  const messageRef = useRef();
  const { currentUser } = useSelector((state) => state.auth);

  const { currentChat } = useSelector((state) => state.chat);

  const { messages, loading } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    currentChat && dispatch(getMessages(currentChat?._id));
  }, [currentChat?._id, dispatch]);

  return (
    <div className="chatBox">
      {loading ? (
        "Loading..."
      ) : (
        <>
          {messages.length > 0 ? (
            messages.map((message) => (
              <div
                key={message._id}
                className={
                  currentUser._id === message.sender
                    ? "chatBoxItem current"
                    : "chatBoxItem"
                }
                ref={messageRef}
              >
                {!currentUser && (
                  <div className="left">
                    <img src="/assets/myprofilepic.jpg" alt="" />
                  </div>
                )}
                <div className="right">
                  <p className="text">{message.text}</p>
                  {message.img && <img src="/assets/bg2.jpg" alt="" />}
                  <span className="time">{format(message.createdAt)}</span>
                </div>
              </div>
            ))
          ) : (
            <span className="noMessages">
              No messages yet <br />
              You can start a conversation with an admin on the project you want
              to build.
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default ChatBox;
