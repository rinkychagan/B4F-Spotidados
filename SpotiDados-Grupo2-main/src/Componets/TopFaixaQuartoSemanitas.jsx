import styles from "./styles.css";
import data from "../spotify_data.history.json";
import React from "react";
import TopFaixasEmQuatroSemanas from "./TemporadaMF/TemporadaMF/4-semanas-MF";

export function TopFaixasQuatrosemanitas() {

  const top100Artistas = TopFaixasEmQuatroSemanas()

  return (
    <div className="playlistDIV">
      <div className="infos">
        <p>#</p>
        <p>Título</p>
      </div>
      <hr className="line" />
      <ul>
        {top100Artistas.map((faixa, index) => (
          <li className="infoDaMusica">
            <div>
              <p key={index} className="ordem">
                {index + 1}
              </p>
            </div>
            <div className="artistaEMusica">
              <p className="nomeMusica" key={index}>
                {faixa.faixa}
              </p>
              <div className="artistaEAlbum">
                <p className="nomeArtista" key={index}>
                  Artista
                </p>
                <span>•</span>
                <p className="nomeAlbum" key={index}>
                  Album
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
