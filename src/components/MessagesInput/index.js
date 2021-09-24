import React, { useState } from "react";
import "./style.css";
import enter from "../../assets/ENTER.svg";


function MessagesInput({ socket }) {
  const [value, setValue] = useState("");
  const [placeHolderValue, setPlaceHolerValue] = useState("Aa");

  const submitForm = (e) => {
    if(value !== ''){
      e.preventDefault();
      socket.emit("message", value);
      setValue("");
      setPlaceHolerValue("Votre message !")
    } else {
      setPlaceHolerValue("votre message était vide")
    }
  };

  return (
    <form className="messages-form" onSubmit={submitForm}>
      <input
        autoFocus
        value={value}
        className="message-form__input"
        placeholder={placeHolderValue}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <img  onClick={submitForm} className="message-form__button" src={enter}></img>
    </form>
  );
}

export default MessagesInput;
