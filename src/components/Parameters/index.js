import React, { useState } from "react";
import "./style.css";
import Music1 from "../../assets/note-de-musiqueViolet.svg";
import Music2 from "../../assets/note-de-musiqueBleu.svg";
import Music3 from "../../assets/note-de-musiqueOrange.svg";


import Color1 from "../../assets/colorBleu.svg";
import Color2 from "../../assets/colorOrange.svg";
import Color3 from "../../assets/colorViolet.svg";

import flecheGauche from "../../assets/petite-fleche-gauche.svg";
import flecheDroite from "../../assets/petite-fleche-droite.svg";

function Parameters({ socket, parameter, setColor, setMusic }) {
  

  let [number, setNumber] = useState(1);
  const Musics = [Music1, Music2, Music3]
  const Colors = [Color1, Color2, Color3]

  socket.on("setAvatar", {type: 'COLOR', value: "#111111"})

  const increaseNumber = () => {
    if (number >= 3) {
      setNumber(1)
      parameter === "music" ? setMusic(number) : setColor('color' + [number])
    } else {
      setNumber(number + 1);
      parameter === "music" ? setMusic(number) : setColor('color' + [number])
    }
  };

  const decreaseNumber = () => {
    if (number <= 1) {
      setNumber(3)
      parameter === "music" ? setMusic(Musics[number]) : setColor(Colors[number])
    } else {
      setNumber(number - 1);
      parameter === "music" ? setMusic(Musics[number]) : setColor(Colors[number])
    }
  };

  return (
    <div className="parameters-container">
      <div className="parameters-container__change-container">
        <img
          alt="fleche"
          id="fleche-gauche"
          onClick={decreaseNumber}
          className="parameter-fleche"
          src={flecheGauche}
        />
        <div className="parameter-value">{parameter}</div>
        <img
          alt="fleche"
          onClick={increaseNumber}
          className="parameter-fleche"
          src={flecheDroite}
        />
      </div>
      <img
        alt="paramètre"
        className="parameters-img"
        src={parameter === "music" ? Musics[number-1] : Colors[number-1]}
      />
    </div>
  );
}

export default Parameters;
