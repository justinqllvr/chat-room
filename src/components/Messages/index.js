import React, { useEffect, useState, useRef } from "react";
import "./style.css";

function Messages({ socket, userColorClass }) {
  const [messages, setMessages] = useState(null);
  const messageEndRef = useRef(null);

  //Fonction qui scroll jusqu'au bas de la page
  const scrollDown = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(userColorClass);
  useEffect(() => {
    const messageListener = (message) => {
      if (typeof message.value === "string") {
        setMessages((prevMessages) => {
          const newMessages = { ...prevMessages };
          newMessages[message.id] = message;
          return newMessages;
        });
      }
    };

    const messagesListener = (messages) => {
      const cleanMessages = messages.filter(
        (message) => typeof message.value === "string"
      );
      setMessages(cleanMessages);
    };

    socket.on("message", messageListener);
    socket.on("messages", messagesListener);

    socket.emit("getMessages");

    return () => {
      socket.off("message", messageListener);
    };
  }, [socket]);

  //UseEffect qui scroll jusqu'au bas de la page
  useEffect(scrollDown, [messages]);

  return (
    <div className="message-list-box">
      {messages &&
        [...Object.values(messages)]
          .sort((a, b) => b.name - a.name)
          .filter((item, idx) => idx)
          .map((message) => (
            <div>
              <div
                key={message.id}
                className={
                  socket.id === message.user.id
                    ? "message-box_current_user"
                    : "message-box"
                }
              >
                {" "}
                <div className="avatar-user__container">
                  <div
                    className={
                      socket.id === message.user.id
                        ? userColorClass + '-message'
                        : "avatar-color__random"
                    }
                  ></div>
                  <span className="message-name">
                    {message.user.name} -{" "}
                    {new Date(message.time).toLocaleTimeString()}
                  </span>
                </div>
                <span className="message-content">{message.value}</span>
              </div>
            </div>
          ))}
      <div ref={messageEndRef} className="scroll-down"></div>
    </div>
  );
}

export default Messages;

// socket.on("deleteMessage", deleteMessageListener);

// const deleteMessageListener = (messageID) => {
//   setMessages((prevMessages) => {
//     const newMessages = { ...prevMessages };
//     delete newMessages[messageID];
//     return newMessages;
//   });
// };
