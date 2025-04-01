import React, { useContext } from "react";
import styles from "../chatBox/ChatBox.module.css";
import { userContext } from "../../../context/UserContext";

const Messages = ({ item, type }) => {
  const { currUser } = useContext(userContext);
  return (
    <div
      className={
        currUser._id === item.sender
          ? styles.chat1stPerson
          : styles.chat2ndPerson
      }
    >
      <div className={styles.mssgDiv}>
        <p className={styles.mssg}>{item?.mssg || "message 2"}</p>
        <span className={styles.time}>
          00:00 am <i className="bi bi-check2-circle"></i>
        </span>
      </div>
    </div>
  );
};

export default Messages;
