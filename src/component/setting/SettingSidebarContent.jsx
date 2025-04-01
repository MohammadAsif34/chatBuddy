import React, { useContext, useEffect } from "react";
import styles from "./SettingSidebarContent.module.css";
import { userContext } from "../../context/UserContext";
import Profile from "./settingContent/Profile";
import { useNavigate } from "react-router-dom";

const General = () => {
  return <div>this is general div</div>;
};
const Account = () => {
  return <div>this is Accout div</div>;
};
const Chats = () => {
  return <div>this is chats div</div>;
};
const VideoVoice = () => {
  return <div>this is video and voice div</div>;
};
const Notifications = () => {
  return <div>this is notifications div</div>;
};
const Parsonalization = () => {
  return <div>this is personlization div</div>;
};
const Storage = () => {
  return <div>this is storage div</div>;
};
const Help = () => {
  return <div>this is help div</div>;
};
const SettingSidebarContent = ({ value }) => {
  const renderContent = () => {
    switch (value) {
      case "Gerneral":
        return <General />;
      case "Account":
        return <Account />;
      case "Chats":
        return <Chats />;
      case "VideoVoice":
        return <VideoVoice />;
      case "Notifications":
        return <Notifications />;
      case "Parsonalization":
        return <Parsonalization />;
      case "Storage":
        return <Storage />;
      case "Help":
        return <Help />;
      case "Profile":
        return <Profile />;
      default:
        return <General />;
    }
  };
  return (
    <>
      <h3>{value}</h3>
      {renderContent()}
    </>
  );
};

export default SettingSidebarContent;
