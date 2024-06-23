import styles from "./styles.css";
import React from "react";
import TopFaixasEmUmAno from "./TemporadaMF/TemporadaMF/1-ano-MF";

export function TopFaixaUmAnito() {

  const top100Artistas = TopFaixasEmUmAno()

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
