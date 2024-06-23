import React from 'react';
import data from "./spotify_data.history.json";

function testTop20Faixas() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

  const artista = reproducoes.filter(
    (e) => e.master_metadata_album_artist_name === "TOOL"
  );

  const tempoPorFaixa = {};

  artista.forEach((reproducao) => {
    const faixa = reproducao.master_metadata_track_name;
    const album = reproducao.master_metadata_album_album_name || "Unknown Album";
    const tempo = reproducao.ms_played;

    tempoPorFaixa[faixa] = tempoPorFaixa[faixa] || {
      totalTempo: 0,
      albums: {},
    };
    tempoPorFaixa[faixa].totalTempo += tempo;
    tempoPorFaixa[faixa].albums[album] =
      (tempoPorFaixa[faixa].albums[album] || 0) + tempo;
  });

  const faixasTempoArray = Object.entries(tempoPorFaixa).map(
    ([faixa, { totalTempo, albums }]) => ({
      faixa,
      totalTempo,
      albums,
    })
  );

  faixasTempoArray.sort((a, b) => b.totalTempo - a.totalTempo);

  const top20Faixas = faixasTempoArray.slice(0, 20);

  return (
    <div className="playlistDIV">
      <div className="infos">
        <p>#</p>
        <p>Título</p>
      </div>
      <hr className="line" />
      <ul>
        {top20Faixas.map((faixa, index) => (
          <li className="infoDaMusica" key={index}>
            <div>
              <p className="ordem">{index + 1}</p>
            </div>
            <div className="artistaEMusica">
              <p className="nomeMusica">{faixa.faixa}</p>
              <div className="artistaEAlbum">
                {Object.entries(faixa.albums).map(([album, tempo]) => (
                  <p className="nomeAlbum" key={album}>{album}</p>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Top20Faixas;
