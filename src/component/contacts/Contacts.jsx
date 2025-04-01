import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./Contact.module.css";
import ContactProfile from "./contactProfile/ContactProfile";
import { userContext } from "../../context/UserContext";

const ChatProfiles = () => {
  // contactBasicDetailsCurrUSer = `http://localhost:3000/api/user/${userId}/contacts`;
  const { currUser, contacts, setContacts, setCurrChat, setMessages } =
    useContext(userContext);
  useEffect(() => {
    const fetchContacts = async () => {
      const userId = currUser?._id;
      // const url = `https://localhost:3000/api/user/${userId}/contacts`;
      const url = `https://chatbuddy-api.onrender.com/api/user/${userId}/contacts`;
      if (!currUser?.contacts) return;
      try {
        await axios
          .post(url)
          .then((res) => setContacts(res.data))
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchContacts();
  }, [currUser]);

  const handleContactChat = (data) => {
    setCurrChat(data);
    const fetchCurrChatMessage = async () => {
      // const url = `http://localhost:3000/api/message/${data.chatId}`;
      const url = `https://chatbuddy-api.onrender.com/api/message/${data.chatId}`;
      try {
        axios
          .post(url)
          .then((res) => setMessages(res.data))
          .catch((err) => console.log(err.message));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCurrChatMessage();
  };

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
          {contacts &&
            contacts?.map((item, index) => (
              <>
                <div key={item?._id} onClick={() => handleContactChat(item)}>
                  {contacts ? (
                    <ContactProfile key={item?._id} item={item} />
                  ) : (
                    <p>Loading</p>
                  )}
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default ChatProfiles;
