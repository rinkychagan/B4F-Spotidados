import styles from "./styles.css";
import TopArtistasLogica from "./Listas/1-top-100-artista";
import teste from "./Listas/teste";
import data from "../spotify_data.history.json";
import React from "react";
import topArtistasLogica from "./Listas/1-top-100-artista";

export function TopArtistas() {

  const top100Artistas = topArtistasLogica()

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
