import { useDispatch, useSelector } from "react-redux";
import "./chatButton.scss";
import { getCurrentChat, setOpenChat } from "../../redux/reducers/ChatReducer";

const ChatButton = () => {
  const { currentChat, chats } = useSelector((state) => state.chat);
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      chats.length === 1 &&
      !currentChat &&
      currentUser?.role !== "SuperAdmin"
    ) {
      dispatch(getCurrentChat(chats[0]));
    }
    dispatch(setOpenChat());
  };

  return (
    <div className="chatButton" onClick={handleClick}>
      <img src="/assets/chatbtnicon3.jpg" alt="" />
    </div>
  );
};

export default ChatButton;
