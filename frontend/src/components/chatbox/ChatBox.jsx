import "./chatBox.scss";

const ChatBox = () => {
  const currentUser = true;

  return (
    <div className="chatBox">
      <div className={currentUser ? "chatBoxItem current" : "chatBoxItem"}>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          possimus hic, eos obcaecati autem aliquam, veniam rem est
          necessitatibus excepturi libero cupiditate recusandae laboriosam
          nostrum error voluptatum dignissimos asperiores architecto?
        </p>
        <span className="time">11 mins ago</span>
      </div>
      <div className="chatBoxItem">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          possimus hic, eos obcaecati autem aliquam, veniam rem est
          necessitatibus excepturi libero cupiditate recusandae laboriosam
          nostrum error voluptatum dignissimos asperiores architecto?
        </p>
        <img src="/assets/bg2.jpg" alt="" />
        <span className="time">11 mins ago</span>
      </div>
      <div className={currentUser ? "chatBoxItem current" : "chatBoxItem"}>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          possimus hic, eos obcaecati autem aliquam, veniam rem est
          necessitatibus excepturi libero cupiditate recusandae laboriosam
          nostrum error voluptatum dignissimos asperiores architecto?
        </p>
        <span className="time">11 mins ago</span>
      </div>
      <div className="chatBoxItem">
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          possimus hic, eos obcaecati autem aliquam, veniam rem est
          necessitatibus excepturi libero cupiditate recusandae laboriosam
          nostrum error voluptatum dignissimos asperiores architecto?
        </p>
        <span className="time">11 mins ago</span>
      </div>
    </div>
  );
};

export default ChatBox;
