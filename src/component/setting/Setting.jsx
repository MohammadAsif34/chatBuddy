import React, { useEffect, useState } from "react";
import styles from "./Setting.module.css";
import SettingSidebarContent from "./SettingSidebarContent";

const Setting = ({ title }) => {
  const settingItem = [
    {
      name: "General",
      icon: "cast",
    },
    {
      name: "Account",
      icon: "key",
    },
    {
      name: "Chats",
      icon: "wechat",
    },
    {
      name: "Voice",
      icon: "camera-video",
    },
    {
      name: "Notifications",
      icon: "bell",
    },
    {
      name: "Parsonalization",
      icon: "brush",
    },
    {
      name: "Storage",
      icon: "database",
    },
    {
      name: "Help",
      icon: "info-circle",
    },
  ];

  const [page, setPage] = useState(title);
  const [active, setActive] = useState(page);
  useEffect(() => {
    setActive(page);
  }, [page]);

  const handleState = (data) => {
    setPage(data);
  };

  return (
    <>
      <div className={styles.SettingContainer}>
        <div className={styles.SettingDiv}>
          <div className={styles.SettingSidebar}>
            <ul className={styles.settingItem}>
              {settingItem.map((item, index) => (
                <>
                  <li
                    key={index}
                    onClick={() => handleState(item.name)}
                    className={` ${styles.listItem}${
                      page === item.name ? styles.active : ""
                    }`}
                  >
                    <i className={`bi bi-${item.icon}`}></i>
                    {item.name}
                  </li>
                </>
              ))}
              {/* <li
                className={active === "General" ? "active" : ""}
                onClick={() => handleState("General")}
              >
                <i className="bi bi-cast"></i>
                general
              </li>
              <li
                style={{ borderLeft: "5px solid #17ec92" }}
                onClick={() => handleState("Account")}
              >
                <i className="bi bi-key active"></i>account
              </li>
              <li onClick={() => handleState("Chats")}>
                <i className="bi bi-wechat "></i>chats
              </li>
              <li onClick={() => handleState("Video&Voice")}>
                <i className="bi bi-camera-video"></i>video & voice
              </li>
              <li onClick={() => handleState("Notifications")}>
                <i className="bi bi-bell"></i>notifications
              </li>
              <li onClick={() => handleState("Parsonalization")}>
                <i className="bi bi-brush"></i>parsonalization
              </li>
              <li onClick={() => handleState("Storage")}>
                <i className="bi bi-database"></i>storage
              </li>
              <li onClick={() => handleState("Help")}>
                <i className="bi bi-info-circle"></i>help
              </li> */}
            </ul>
            <span onClick={() => handleState("Profile")}>
              <i className="bi bi-person-circle"></i>Profile
            </span>
          </div>
          <div className={styles.settingContent}>
            <SettingSidebarContent value={`${page}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
