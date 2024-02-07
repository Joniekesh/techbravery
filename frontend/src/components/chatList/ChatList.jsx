import "./chatList.scss";
import ChatItem from "../chatItem/ChatItem";
import { useSelector } from "react-redux";

const ChatList = ({ users }) => {
  const { chats } = useSelector((state) => state.chat);

  return (
    <div className="chatList">
      {chats.length > 0 ? (
        chats.map((chat) => (
          <ChatItem current={chat} key={chat._id} users={users} />
        ))
      ) : (
        <span className="noFound">Chats not found</span>
      )}
    </div>
  );
};

export default ChatList;
