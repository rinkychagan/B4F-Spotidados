import data from "../spotify_data.history.json";
import React from "react";

function PosicaoNoTop100() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

  const tempoPorArtista = {};

  reproducoes.forEach((reproducao) => {
    const artista = reproducao.master_metadata_album_artist_name;
    const tempo = reproducao.ms_played;

    tempoPorArtista[artista] = (tempoPorArtista[artista] || 0) + tempo;
  });

  const artistasTempoArray = Object.entries(tempoPorArtista).map(
    ([artista, tempoTotal]) => ({
      artista,
      tempoTotal,
    })
  );

  const artistasOrdenados = artistasTempoArray.sort(
    (a, b) => b.tempoTotal - a.tempoTotal
  );

  let posicao = -1;

  for (let i = 0; i < 100; i++) {
    if (artistasOrdenados[i].artista === "TOOL") {
      posicao = i + 1;
      break;
    }
  }

  return (
    <div className="App">
      <div>
        <p>{posicao !== -1 ? `Top ${posicao}` : "TOOL não está no top 100."}</p>
      </div>
    </div>
  );
}

export default PosicaoNoTop100;
