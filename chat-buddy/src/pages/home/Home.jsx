import styles from "./Home.module.css";
import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import ChatProfiles from "../../component/chatProfiles/ChatProfiles";
import ChatBox from "../../component/chatBox/ChatBox";

const Home = () => {
  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.header}>
          <span className="bi bi-chat-dots"></span>&nbsp;ChatBuddy
        </div>
        <div className={styles.body}>
          <Sidebar />
          <ChatProfiles />
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default Home;
