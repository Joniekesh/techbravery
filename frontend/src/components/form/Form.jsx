import "./form.scss";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IoSendSharp } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa6";
import { createMessage } from "../../redux/actions/MessageAction";

const Form = () => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const { currentChat } = useSelector((state) => state.chat);
  const { currentUser } = useSelector((state) => state.auth);

  const friend = currentChat?.members.find(
    (member) => member._id !== currentUser._id
  );

  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  console.log(uploadedImageUrl);
  // console.log(currentChat);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file && !text) {
      return toast.error("Image and/or text is required", { theme: "colored" });
    }

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "upload");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/joniekesh/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        setUploadedImageUrl(data?.url);

        let newMessage = {
          chatId: currentChat?._id,
          text,
          img: data?.url,
        };

        data.url && dispatch(createMessage(newMessage));

        setText("");
        setFile("");
      } catch (error) {
        console.log(error);
      }
    } else {
      let newMessage = {
        chatId: currentChat?._id,
        text,
      };

      dispatch(createMessage(newMessage));

      setText("");
      setFile("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="submitForm">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="buttons">
        <label htmlFor="imageFile" className="imageFile">
          <FaPaperclip />
        </label>
        <input
          type="file"
          id="imageFile"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">
          <span>
            <IoSendSharp />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
