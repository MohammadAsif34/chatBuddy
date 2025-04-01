import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../../../context/UserContext";

const ChatSender = () => {
  const { currUser, currChat } = useContext(userContext);
  const [mssg, setMssg] = useState("");
  const handleSentMssg = () => {
    alert(mssg);
    const chatId = currChat.chatId;
    const sender = currUser._id;
    const sentMssg = async () => {
      try {
        chatId, sender, mssg;
        const response = await axios
          .post(
            `http://localhost:3000/api/message/message`,
            { chatId, sender, mssg },
            { withCredentials: true }
          )
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error.message);
      }
    };
    sentMssg();
    setMssg("");
  };
  return (
    <>
      <div className="w-full flex m-0 p-0 ">
        <div>
          <span
            className="bi bi-emoji-smile"
            title="Emojis, GIFs, Stickers"
          ></span>
        </div>
        <div>
          <span className="bi bi-paperclip" title="Attach"></span>
        </div>
        <div className="flex-auto">
          <input
            type="text"
            placeholder="Type a Message"
            className="flex-auto"
            value={mssg}
            onChange={(e) => setMssg(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleSentMssg()} className="mx-4">
            <span className="bi bi-send" title="Record Voice Message"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatSender;
