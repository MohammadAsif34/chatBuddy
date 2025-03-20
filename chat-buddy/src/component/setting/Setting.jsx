import React, { useState } from "react";
import styles from "./Setting.module.css";

// const Chats = () => {};
// const Video_Voice = () => {};
// const Notifications = () => {};
// const Storage = () => {};
// const Help = () => {};
// const Profile = () => {};

const Setting = () => {
  const [page, setPage] = useState(General());
  const General = () => {};
  const Account = () => {};

  return (
    <>
      <div className={styles.SettingDiv}>
        <div className={styles.SettingSidebar}>
          <ul>
            <li>
              <i class="bi bi-cast"></i>general
            </li>
            <li>
              <i class="bi bi-key"></i>account
            </li>
            <li>
              <i class="bi bi-wechat"></i>chats
            </li>
            <li>
              <i class="bi bi-camera-video"></i>video & voice
            </li>
            <li>
              <i class="bi bi-bell"></i>notifications
            </li>
            <li>
              <i class="bi bi-brush"></i>parsonalization
            </li>
            <li>
              <i className="bi bi-database"></i>storage
            </li>
            <li>
              <i class="bi bi-info-circle"></i>help
            </li>
          </ul>
          <span>
            <i className="bi bi-person-circle"></i>Profile
          </span>
        </div>
        <div>{page}</div>
      </div>
    </>
  );
};

export default Setting;
