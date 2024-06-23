import data from "../spotify_data.history.json"
import React from "react";



function NrFaixaPorArtista () {
 
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
  const artista = reproducoes.filter((e) => e.master_metadata_album_artist_name === "TOOL");
  let musicasSemRepetir = [
    ...new Set(artista.map((e) => e.master_metadata_track_name)),
  ];


  return (
    <div className="App">
      <p>{`${musicasSemRepetir.length}`}</p>
    </div>
  );
}

export default NrFaixaPorArtista;