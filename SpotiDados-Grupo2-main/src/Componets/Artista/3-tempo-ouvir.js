
import data from "../spotify_data.history.json"
import React from "react";



function TempoOuvirArtista () {
    
    const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
    const artista = reproducoes.filter((e) => e.master_metadata_album_artist_name === "TOOL");
    const tempoOuvido = artista.reduce((acc, curr) => acc + curr.ms_played, 0);
    const tempoOuvidoEmMinutos = Math.floor((tempoOuvido / 1000) / 60)
 


  return (
    <div className="App">
      <p>{`${tempoOuvidoEmMinutos}`}</p>
    </div>
  );
}

export default TempoOuvirArtista;