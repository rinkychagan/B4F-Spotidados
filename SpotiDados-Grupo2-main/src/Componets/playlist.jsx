import styles from "./styles.css";
import data from "../spotify_data.history.json";
import { topFaixas } from "./Listas/2-top-100-faixa";
import React from "react";

export function Playlist() {
  const top100Artistas = topFaixas()

  return (
    <div className="playlistDIV">
      <div className="infos">
        <p>#</p>
        <p>Título</p>
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
            <div className="artistaEMusica">
              <p className="nomeMusica" key={index}>
                {artista.artista}
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
