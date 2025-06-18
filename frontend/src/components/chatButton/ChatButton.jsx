import "./chatButton.scss";

const ChatButton = () => {
  return (
    <div className="chatButton">
      <a
        href="https://wa.me/+2348050667156?text=urlencodedtext"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/chatbtnicon3.jpg" alt="" />
      </a>
    </div>
  );
};

export default ChatButton;
