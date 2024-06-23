import styles from "./styles.css";
import data from "../spotify_data.history.json";
import React from "react";

const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
const artista = reproducoes.filter(
  (e) => e.master_metadata_album_artist_name === "TOOL"
);

const tempoPorArtista = {};

artista.forEach((reproducao) => {
  const artista = reproducao.master_metadata_track_name;
  const album = reproducao.master_metadata_album_album_name || "Unknown Album";
  const tempo = reproducao.ms_played;

  tempoPorArtista[artista] = tempoPorArtista[artista] || {
    totalTempo: 0,
    albums: {},
  };
  tempoPorArtista[artista].totalTempo += tempo;
  tempoPorArtista[artista].albums[album] =
    (tempoPorArtista[artista].albums[album] || 0) + tempo;
});

const artistasTempoArray = Object.entries(tempoPorArtista).map(
  ([artista, { totalTempo, albums }]) => ({
    artista,
    totalTempo,
    albums,
  })
);

artistasTempoArray.sort((a, b) => b.totalTempo - a.totalTempo);

const top100Artistas = artistasTempoArray.slice(0, 20);

export function TopVinteArtista() {
  return (
    <div className="playlistDIV">
      <div className="infos">
        <p>#</p>
        <p>Título</p>
        <p>Top 20 Geral</p>
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
                {Object.entries(artista.albums).map(([album, tempo]) => (
                  <p className="nomeAlbum" key={album}>
                    {album}
                  </p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}