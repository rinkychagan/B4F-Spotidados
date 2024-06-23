import styles from "./styles.css";
import data from "../spotify_data.history.json";
import React from "react";
import TopArtistasEmQuatroSemanas from "./Temporadas/4-semanas";


export function TopArtistaEmQuatroSemannhas() {

  const top100Artistas = TopArtistasEmQuatroSemanas()

  return (
    <div className="playlistDIV">
      <div className="infos">
        <p>#</p>
        <p>Artista</p>
      </div>
      <hr className="line" />
      <ul>
        {top100Artistas.map((artista, index) => (
          <li className="infoDaMusica">
            <div>
              <p key={index} className="ordem">
                {index + 1}
              </p>
            </div>
            <div className="Artista">
              <p className="Top_Artista" key={index}>
                {artista.artista}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
