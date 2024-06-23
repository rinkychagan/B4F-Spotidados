import data from "../spotify_data.history.json"
import React from "react";



function NrReproducaoPorArtista () {
 
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
  const artista = reproducoes.filter((e) => e.master_metadata_album_artist_name === "TOOL");

  return (
    <div className="App">
      <p>{`${artista.length}`}</p>
    </div>
  );
}

export default NrReproducaoPorArtista;
