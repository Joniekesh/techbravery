import "./chatBox.scss";

const ChatBox = () => {
  const currentUser = true;

  return (
    <div className="chatBox">
      <div className="chatBoxItem">
        <div className="left">
          <img src="/assets/myprofilepic.jpg" alt="" />
        </div>
        <div className="right">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            possimus hic, eos obcaecati autem aliquam, veniam rem est
            necessitatibus excepturi libero cupiditate recusandae laboriosam
            nostrum error voluptatum dignissimos asperiores architecto?
          </p>
          <img src="/assets/bg2.jpg" alt="" />
          <span className="time">11 mins ago</span>
        </div>
      </div>
      <div className={currentUser ? "chatBoxItem current" : "chatBoxItem"}>
        {!currentUser && (
          <div className="left">
            <img src="/assets/myprofilepic.jpg" alt="" />
          </div>
        )}
        <div className="right">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            possimus hic, eos obcaecati autem aliquam, veniam rem est
            necessitatibus excepturi libero cupiditate recusandae laboriosam
            nostrum error voluptatum dignissimos asperiores architecto?
          </p>
          <img src="/assets/bg2.jpg" alt="" />
          <span className="time">11 mins ago</span>
        </div>
      </div>
      <div className="chatBoxItem">
        <div className="left">
          <img src="/assets/myprofilepic.jpg" alt="" />
        </div>
        <div className="right">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            possimus hic, eos obcaecati autem aliquam, veniam rem est
            necessitatibus excepturi libero cupiditate recusandae laboriosam
            nostrum error voluptatum dignissimos asperiores architecto?
          </p>
          <img src="/assets/bg2.jpg" alt="" />
          <span className="time">11 mins ago</span>
        </div>
      </div>
      <div className={currentUser ? "chatBoxItem current" : "chatBoxItem"}>
        {!currentUser && (
          <div className="left">
            <img src="/assets/myprofilepic.jpg" alt="" />
          </div>
        )}
        <div className="right">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            possimus hic, eos obcaecati autem aliquam, veniam rem est
            necessitatibus excepturi libero cupiditate recusandae laboriosam
            nostrum error voluptatum dignissimos asperiores architecto?
          </p>
          <span className="time">11 mins ago</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
