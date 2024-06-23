import data from "../spotify_data.history.json";
import React from "react";

function topAlbum () {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

  const albunsInfo = {};

  reproducoes.forEach((reproducao) => {
    const album = reproducao.master_metadata_album_album_name;
    const artista = reproducao.master_metadata_album_artist_name;
    const tempo = reproducao.ms_played;

    if (!albunsInfo[album]) {
      albunsInfo[album] = {
        tempoTotal: 0,
        artistas: new Set(),
        artistasArray: [],
      };
    }

    albunsInfo[album].tempoTotal += tempo;
    albunsInfo[album].artistas.add(artista);
  });

  const albunsTempoArray = Object.entries(albunsInfo).map(
    ([album, { tempoTotal, artistas, artistasArray }]) => ({
      album,
      tempoTotal,
      artistasArray: [...artistas],
    })
  );

 return albunsTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal).slice(0,100)
   
    
    
}

export default topAlbum ;