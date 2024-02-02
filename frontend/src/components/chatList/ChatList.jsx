import { useEffect, useState } from "react";
import "./chatList.scss";
import { makeRequest } from "../../utils/makeRequest";
import ChatItem from "../chatItem/ChatItem";
import { useSelector } from "react-redux";

const ChatList = () => {
  const { chats } = useSelector((state) => state.chat);

  return (
    <div className="chatList">
      {chats.length > 0 ? (
        chats.map((chat) => <ChatItem current={chat} key={chat._id} />)
      ) : (
        <span className="noFound">Chats not found</span>
      )}
    </div>
  );
};

export default ChatList;
