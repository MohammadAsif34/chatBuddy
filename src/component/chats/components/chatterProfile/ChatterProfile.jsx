import React, { useContext } from "react";
import { userContext } from "../../../../context/UserContext";

const ChatterProfile = () => {
  const { currChat } = useContext(userContext);
  return (
    <div className="w-1/2 h-96 p-4 flex gap-x-3 bg-white absolute top-2 left-16 z-30 rounded-lg border border-gray-300 shadow-xl">
      <div className="w-1/3 h-full  border-r-2 border-gray-300"></div>
      <div className="w-2/3 h-full px-2  ">
        <div className="w-full mx-auto overflow-hidden">
          <img
            className="w-28 h-28 rounded-full object-cover"
            src={currChat.avatar}
            alt=""
          />
        </div>
        <h3 className="font-semibold text-center text-2xl">{currChat.name}</h3>
        <p className="text-gray-400 font-light">About</p>
        <p>{currChat.about}</p>
        <p className="text-gray-400 font-light">Phone number</p>
        <p>+91 {currChat.phone}</p>
        <br />
        <br />

        <p>userId : {currChat._id}</p>
        <p>chatId : {currChat.chatId}</p>
      </div>
    </div>
  );
};

export default ChatterProfile;
