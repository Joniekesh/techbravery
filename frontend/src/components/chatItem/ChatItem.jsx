import { useDispatch, useSelector } from "react-redux";
import "./chatItem.scss";
import { getCurrentChat } from "../../redux/reducers/ChatReducer";

const ChatItem = ({ current, users }) => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const { currentChat } = useSelector((state) => state.chat);

  const client = current?.members.find(
    (member) => member._id !== currentUser._id
  );
  console.log(users);

  return (
    <div className="chatItem" onClick={() => dispatch(getCurrentChat(current))}>
      <div className="left">
        <img src="/assets/myprofilepic.jpg" alt="" />
        {users.some((user) => user.userId === client._id) && (
          <span className="online"></span>
        )}
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
