// import Logo from "../../assets/logo.png";

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Parameters from "../Parameters";
import "./style.css";

function NameInput({ socket, setColor, setMusic }) {
  const [value, setValue] = useState("");
  const history = useHistory();

  const submitForm = (e) => {
    if (value !== "") {
      e.preventDefault();
      socket.emit("setUsername", value);
      setValue("");
      socket.emit("getUsers");
      history.push("/chatroom");
    } else alert("Pseudo obligatoire !");
  };

  return (
    <form className="name-input_form" onSubmit={submitForm}>
      <div className="form1"></div>
      <img alt="logo" className="name-input__img" src={Logo} />
      <div className="name-input__container">
        <input
          autoFocus
          value={value}
          className="name-input__input"
          placeholder="Enter your name"
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
        <div className="name-input__parameters-container">
          <Parameters socket={socket} parameter="music" setColor={setColor} setMusic={setMusic} />
          <Parameters socket={socket} parameter="color" setColor={setColor} setMusic={setMusic} />
        </div>

        <button className="name-input__button" onClick={submitForm}>
          Choisir !
        </button>
        <div className="form2"></div>
        <div className="form3"></div>
        <div className="form4"></div>
      </div>
    </form>
  );
}

export default NameInput;
