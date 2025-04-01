import { userContext } from "../../context/UserContext";
import Setting from "../setting/Setting";
import styles from "./Sidebar.module.css";
import React, { useContext, useRef, useState } from "react";

const Sidebar = () => {
  const [isActiveSetting, SetIsActiveSetting] = useState(false);
  const [opt, SetOpt] = useState("");
  const { currUser } = useContext(userContext);

  return (
    <>
      <div className={styles.SidebarDiv}>
        <div className={styles.navItem}>
          <ul>
            <li>
              <span className="bi bi-list" title="Open Navigation"></span>
            </li>
            <li>
              <span className="bi bi-chat-left-text" title="Chats"></span>
            </li>
            <li>
              <span className="bi bi-telephone" title="Calls"></span>
            </li>
            <li>
              <span className="bi bi-disc" title="Status"></span>
            </li>
          </ul>
        </div>
        <div className={styles.profile}>
          <ul>
            <li>
              <span className="bi bi-star" title="Starred Messages"></span>
            </li>
            <li>
              <span className="bi bi-archive" title="Archive"></span>
            </li>
            <li
              onClick={() => {
                SetIsActiveSetting(!isActiveSetting);
                SetOpt("General");
              }}
            >
              <span className="bi bi-gear" title="Setting"></span>
            </li>
          </ul>

          <div
            className={styles.avatar}
            title="Profile"
            onClick={() => {
              SetIsActiveSetting(!isActiveSetting);
              SetOpt("Profile");
            }}
          >
            <img src={currUser?.avatar || "/chatBuddy/default_avatar.png"} />
          </div>
          {isActiveSetting && <Setting title={opt} />}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
