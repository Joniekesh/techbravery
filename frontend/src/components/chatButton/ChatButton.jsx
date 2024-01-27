import "./chatButton.scss";

const ChatButton = ({ setOpenChat, setActive }) => {
  const handleClick = () => {
    setOpenChat((prev) => !prev);
    setActive((prev) => !prev);
  };

  return (
    <div className="chatButton" onClick={handleClick}>
      <img src="/assets/chatbtnicon3.jpg" alt="" />
    </div>
  );
};

export default ChatButton;
