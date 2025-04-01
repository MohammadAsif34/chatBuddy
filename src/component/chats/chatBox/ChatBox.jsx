import React, { useContext, useEffect, useState } from "react";
import styles from "./ChatBox.module.css";
import { userContext } from "../../../context/UserContext";
import axios from "axios";
import Messages from "../messages/Messages";
import ChatSender from "../components/chatSender/ChatSender";
import ChatterProfile from "../components/chatterProfile/ChatterProfile";

const ChatBox = () => {
  const { currChat, messages, setMessages } = useContext(userContext);
  const [currChatProfile, setcurrChatProfile] = useState(false);

  return (
    <>
      {!currChat ? (
        <div
          className={styles.ChatBoxDiv}
          style={{
            border: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "gray",
            fontSize: "14px",
            position: "relative",
          }}
        >
          {/* <p className="bi bi-chat-dots"></p> */}
          <span id="bg-logo" className="bi bi-chat-dots"></span>
          <p style={{ marginTop: "150px" }}>
            sending and receiving messages without keep your phone online
          </p>
        </div>
      ) : (
        <div className={styles.ChatBoxDiv}>
          <div className={styles.ChatBoxHead}>
            <div className={styles.user}>
              <div
                className={styles.avatar}
                onClick={() => setcurrChatProfile(!currChatProfile)}
              >
                <img
                  src={currChat?.avatar || "/chatBuddy/default_avatar.png"}
                />
              </div>
              <p>{currChat?.name || "name"}</p>
            </div>
            {currChatProfile && <ChatterProfile />}
            <div className={styles.call_search}>
              <div className={styles.call}>
                <span className="bi bi-camera-video"></span>
                <span className="bi bi-telephone"></span>
              </div>
              <span className="bi bi-search"></span>
            </div>
          </div>

          <div className={styles.ChatBoxBody}>
            <span id="bg-logo" className="bi bi-chat-dots"></span>
            <div className={styles.Chats}>
              {messages &&
                // [1, 2, 3, 4, 5].map((item, index) => (
                messages.map((item, index) => (
                  <Messages item={item} type={"user"} />
                ))}
            </div>
          </div>

          <div className={styles.ChatBoxBottom}>
            <ChatSender />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
