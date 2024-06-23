import data from "../spotify_data.history.json";
import React from "react";

function NrFaixasDiferentes () {


  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
  
  let musicasSemRepetir = [
    ...new Set(reproducoes.map((e) => e.master_metadata_track_name)),
  ];

  return (
    <div className="App">
      <p>{`${musicasSemRepetir.length}`}</p>
    </div>
  );
}

export default NrFaixasDiferentes;
