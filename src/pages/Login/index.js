import React, { useEffect, useState } from "react";
import NameInput from "../../components/NameInput";
import Blob from "../../components/Blob";
import { Howl, Howler } from "howler";
import PlayMusic1 from "../../assets/wii_music.mp3";
import PlayMusic2 from "../../assets/metr.mp3";
import PlayMusic3 from "../../assets/cordes.mp3";

import "./style.css";

function Login({ socket, setColor, setMusic, music, setUserMusic, userMusic }) {

  return (
    <div className="login-page">
      <Blob />
      <div className="login-page__blur">
        <NameInput socket={socket} setColor={setColor} setMusic={setMusic} />
      </div>
    </div>
  );
}

export default Login;
