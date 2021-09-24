import React, { useEffect } from "react";
import "./style.css";

function Blob() {
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      //créer le nombre de blob en fonction de param
      const blob = document.getElementById("blob");
      const newBlob = document.createElement("div");
      newBlob.className = "blob";
      const randomWidth = Math.floor(Math.random() * (100 - 50)) + 50;
      const randomHeight = Math.floor(Math.random() * (100 - 50)) + 50;
      const randomPositionX = Math.floor(Math.random() * (25 - 1)) + 1;
      const randomPositionY = Math.floor(Math.random() * (25 - 1)) + 1;
      const randomPositionGradient = Math.floor(Math.random() * (350 - 0));

      newBlob.style.background =
        "linear-gradient(" +
        randomPositionGradient +
        "deg, rgba(199, 174, 226, 0.5) 0%,#8f71c9 24.48%,#254dc2 38.54%,#d8617e 62.5%,#ef7d7a 80.73%,#f9d6bc 100%)";
      newBlob.style.top = randomPositionY + "vh";
      newBlob.style.left = randomPositionX + "vw";
      newBlob.style.width = randomWidth + "vw";
      newBlob.style.height = randomHeight + "vh";

      blob.insertAdjacentElement("afterbegin", newBlob);
    }
  });

  return <div id="blob" className="blob-container"></div>;
}

export default Blob;
