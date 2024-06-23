import React, { useState } from 'react';
import TopAlbum from "../Listas/3-top-100-albuns";
import { TopVinteArtista } from "../topVinteArtista";

export default function ListaSet(props) {
  
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonId) => { 
    props.handle(buttonId)
    setSelectedButton(buttonId);
  };


  return (
    <div className="ListaSet">
      <div className="ListaSetBtn">
        <button
          className={selectedButton === "artist" ? "selected" : ""}
          onClick={() => handleButtonClick("artist")}
        >
          Melhores Artistas
        </button>
        <button
          className={selectedButton === "track" ? "selected" : ""}
          onClick={() => handleButtonClick("track")}
        >
          Melhores Faixas
        </button>
        <button
          className={selectedButton === "album" ? "selected" : ""}
          onClick={() => handleButtonClick("album")}
        >
          Melhores Álbuns
        </button>
      </div>
    </div>
  );
}
