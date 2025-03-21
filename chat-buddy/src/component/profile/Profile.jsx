import React from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <div className={styles.profileDiv}>
        <div className={styles.avatar}>
          <img src="/chatBuddy/avatar2.png" alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.name_status}>
            <p>names</p>
            <span>online</span>
          </div>
          <div className={styles.lastMssg}>
            <span className={styles.unread}>1</span>
            firsmesssdknsfambsafmbsafmbsamsafmbfksfksskfsfkh
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
