import { useState } from "react";
import "./chatButton.scss";

const ChatButton = () => {
  const [open, setOPen] = useState(false);
  return (
    <div className="chatButton">
      <div className="chat-button-wrapper">
        {open && (
          <>
            <span onClick={() => setOPen(false)} className="close-btn">
              x
            </span>
            <div className="links">
              <a
                onClick={() => setOPen(false)}
                href="https://wa.me/+2348050667156?text=urlencodedtext"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/chatbtnicon3.jpg" alt="" />
              </a>
              <a
                onClick={() => setOPen(false)}
                href="https://wa.me/+2348050667156?text=urlencodedtext"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/chatbtnicon4.jpg" alt="" />
              </a>
              <a
                onClick={() => setOPen(false)}
                href="https://wa.me/+2348050667156?text=urlencodedtext"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/chatbtnicon.jpg" alt="" />
              </a>
            </div>
          </>
        )}
        {!open && (
          <div className="toggle-btn" onClick={() => setOPen((prev) => !prev)}>
            <img src="/chatbtnicon.jpg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatButton;
