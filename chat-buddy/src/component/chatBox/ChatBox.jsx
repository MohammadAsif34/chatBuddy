import React from "react";
import styles from "./ChatBox.module.css";

const ChatBox = () => {
  return (
    <>
      <div className={styles.ChatBoxDiv}>
        <div className={styles.ChatBoxHead}>
          <div className={styles.user}>
            <div className={styles.avatar}>
              <img src="./avatar2.png" alt="" />
            </div>
            <p>name</p>
          </div>
          <div className={styles.call_search}>
            <div className={styles.call}>
              <span className="bi bi-camera-video"></span>
              <span className="bi bi-telephone"></span>
            </div>
            <span className="bi bi-search"></span>
          </div>
        </div>

        <div className={styles.ChatBoxBody}></div>

        <div className={styles.ChatBoxBottom}>
          <span
            className="bi bi-emoji-smile"
            title="Emojis, GIFs, Stickers"
          ></span>
          <span className="bi bi-paperclip" title="Attach"></span>
          <input type="text" name="" id="" placeholder="Type a Message" />
          <span className="bi bi-send" title="Record Voice Message"></span>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
