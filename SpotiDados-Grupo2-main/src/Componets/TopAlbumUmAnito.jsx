import styles from "./styles.css";
import React from "react";
import TopAlbunsEmUmAno from "./TemporadaMAL/TemporadaMAL/1-ano-MAL";

export function TopAlbunsEmUmAnito() {
  const top100Albuns = TopAlbunsEmUmAno()

  return (
    <div className="playlistDIV">
      <div className="infos">
        <p>#</p>
        <p>Título</p>
      </div>
      <hr className="line" />
      <ul>
        {top100Albuns.map((album, index) => (
          <li className="infoDaMusica">
            <div>
              <p key={index} className="ordem">
                {index + 1}
              </p>
            </div>
            <div className="artistaEMusica">
              <p className="nomeDoAlbum" key={index}>
                {album.album}
              </p>
              <p className="artistaDoAlbum" key={index}>
                {album.artistasArray}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}