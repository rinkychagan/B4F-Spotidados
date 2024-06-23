import data from "../spotify_data.history.json";
import React from "react";

function topArtistasLogica() {
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

  artistasTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);

  return artistasTempoArray.slice(0, 100);


}

export default topArtistasLogica;
