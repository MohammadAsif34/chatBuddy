import React from "react";
import styles from "./SettingSidebarContent.module.css";

const General = () => {
  return (
    <>
      <div>this is general div</div>
    </>
  );
};
const Profile = () => {
  return (
    <>
      <div className={styles.settingProfile}>
        <div className={styles.avatar}>
          <img src={"/chatBuddy/avatar1.png"} alt="" />
        </div>

        <div className={styles.name}>
          <p>Name</p>
          <span className="bi bi-pencil"></span>
        </div>
        <div className={styles.about}>
          <label>About</label>
          <p>About</p>
          <span className="bi bi-pencil"></span>
        </div>
        <div className={styles.phone}>
          <label>Phone number</label>
          <p>+91 7250761747</p>
        </div>
        <p></p>
      </div>
      <div className={styles.logout}>
        <button>Logout</button>
        <p>
          Chat history on this computer will be cleared when you are log out.
        </p>
      </div>
    </>
  );
};
const Help = () => {
  return (
    <>
      <div>this is help div</div>
    </>
  );
};
const SettingSidebarContent = ({ props }) => {
  return (
    <>
      {/* <General />
      <Help /> */}
      <Profile />
    </>
  );
};

export default SettingSidebarContent;
