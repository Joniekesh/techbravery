import { useDispatch, useSelector } from "react-redux";
import "./chatItem.scss";
import { getCurrentChat } from "../../redux/reducers/ChatReducer";

const ChatItem = ({ current }) => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { currentChat } = useSelector((state) => state.chat);

  console.log(currentChat);

  const client = current?.members.find(
    (member) => member._id !== currentUser._id
  );

  return (
    <div className="chatItem" onClick={() => dispatch(getCurrentChat(current))}>
      <div className="left">
        <img src="/assets/myprofilepic.jpg" alt="" />
      </div>
      <div className="middle">
        <span className="name">
          {client?.firstname} {client?.lastname}
        </span>
        {current?.latestMessage && (
          <span className="lastMessage">
            {current?.latestMessage?.substring(0, 30) +
              (current?.latestMessage?.length > 30 ? "..." : "")}
          </span>
        )}
      </div>
      <div className="right">11 mins ago</div>
    </div>
  );
};

export default ChatItem;
