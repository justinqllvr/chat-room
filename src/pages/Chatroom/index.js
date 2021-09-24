import React, { useEffect, useState } from "react";
import Messages from "../../components/Messages";
import MessagesInput from "../../components/MessagesInput";
import Users from "../../components/Users";
import Blob from "../../components/Blob";
import "./style.css";

function Chatroom({ socket, music, color }) {
  const [userColorClass, setUserColorClass] = useState([]);


  return (
    <div className="chat-room">
      <Blob />
      <div className="chat-room__blur">
        <Users socket={socket} userColorClass={userColorClass} setUserColorClass={setUserColorClass} music={music} color={color}/>
        <div className="chat-message__container">
          <Messages socket={socket} userColorClass={userColorClass}/>
          <MessagesInput socket={socket} />
        </div>
      </div>
    </div>
  );
}

export default Chatroom;
