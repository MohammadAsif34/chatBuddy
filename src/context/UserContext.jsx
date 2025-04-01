import { createContext, useState } from "react";

export const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  // 1. currUSer  -> static
  // 2. contact   ->  static
  // 3. currChat  -> chnages frequently
  // 4.
  const [currUser, setCurrUser] = useState(null);
  // const currUser = useRef(null);
  const [contacts, setContacts] = useState(null);

  const [currChat, setCurrChat] = useState(null);
  const [messages, setMessages] = useState(null);

  return (
    <userContext.Provider
      value={{
        currUser,
        setCurrUser,
        contacts,
        setContacts,
        currChat,
        setCurrChat,
        messages,
        setMessages,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
