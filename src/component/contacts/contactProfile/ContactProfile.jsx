import React, { useContext, useEffect, useState } from "react";
import styles from "./ContactProfile.module.css";
import axios from "axios";

const Profile = ({ item }) => {
  return (
    <>
      <div className={styles.profileDiv} key={item?._id}>
        <div className={styles.avatar}>
          <img src={item?.avatar || "/chatBuddy/default_avatar.png"} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.name_status}>
            <p>{item?.name || item || "default_name"}</p>
            <span>default</span>
          </div>
          <div className={styles.lastMssg}>
            <span className={styles.unread}>1</span>
            {"default_message"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
