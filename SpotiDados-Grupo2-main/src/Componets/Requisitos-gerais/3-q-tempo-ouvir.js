import data from "../spotify_data.history.json";
import React from "react";

function TempoAOuvir() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
  const tempoOuvido = reproducoes.reduce((acc, curr) => acc + curr.ms_played, 0);
  const tempoOuvidoEmMinutos = Math.floor((tempoOuvido / 1000) / 60)



  return (
    <div className="App">
      <p>{`${tempoOuvidoEmMinutos}`}</p>
    </div>
  );
}

export default TempoAOuvir;
