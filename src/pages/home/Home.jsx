import styles from "./Home.module.css";
import React, { useContext, useEffect } from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Contacts from "../../component/contacts/Contacts";
import ChatBox from "../../component/chats/chatBox/ChatBox";
import { userContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const { currUser, setCurrUser, contacts, currChat } = useContext(userContext);
  useEffect(() => {
    // if (!status) {
    //   // alert("user not login");
    //   return; //navigate("/login");
    // }
    const fetchLoginUser = async () => {
      let status = sessionStorage.getItem("session");
      if (status) status = JSON.parse(status);
      const userId = status.userId;
      //   const url = `http://localhost:3000/api/user/${status.userId}/user`;
      const url = `https://chatbuddy-api.onrender.com/api/user/${userId}/user`;
      try {
        await axios
          .post(url)
          .then((res) => setCurrUser(res.data))
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchLoginUser();
  }, []);
  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.header}>
          <span className="bi bi-chat-dots"></span>&nbsp;ChatBuddy [CurrUser :
          {currUser?.name || currUser || "null"}
          {currUser?._id} ] , [CurrChat : {currChat?.name || currChat || "null"}{" "}
          ]
        </div>
        <div className={styles.body}>
          <Sidebar />
          <Contacts />
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default Home;
