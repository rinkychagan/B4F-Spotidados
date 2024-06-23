import data from "../spotify_data.history.json";
import React from "react";

function MediaDiaria() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
  const tempoSemPular = reproducoes.filter((e) => e.reason_end === "trackdone");
  const tempoOuvido = tempoSemPular.reduce(
    (acc, curr) => acc + curr.ms_played,
    0
  );
  const tempoOuvidoEmMinuto = Math.floor((tempoOuvido/1000)/60)
  const diferencaEntreDatas = 1295;
  const media = Math.floor(tempoOuvidoEmMinuto / diferencaEntreDatas);


  

  return (
    <div className="App">
      <p>{`${media} Minutos`}</p>
    </div>
  );
}

export default MediaDiaria;
