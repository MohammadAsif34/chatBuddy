import React from "react";
import styles from "./ChatProfiles.module.css";
import Profile from "../profile/Profile";

const ChatProfiles = () => {
  return (
    <>
      <div className={styles.ChatProfilesDiv}>
        <div className={styles.ChatProfilesHead}>
          <div className={styles.filterDiv}>
            <div className={styles.filterDivTitle}>
              <h3>Chats</h3>
            </div>
            <div className={styles.filterDivIcons}>
              <span className="bi bi-pencil-square" title="Add New Chat"></span>
              <span className="bi bi-filter" title="Filter"></span>
            </div>  
          </div>
          <div className={styles.searchDiv}>
            <span className="bi bi-search"></span>
            <input type="text" placeholder="Search and Add New Chat" />
          </div>
        </div>
        <div className={styles.ChatProfileList}>
          {[1, 2, 3].map((item, index) => (
            <Profile />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatProfiles;
