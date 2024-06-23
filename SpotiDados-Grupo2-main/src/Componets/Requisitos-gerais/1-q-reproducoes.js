import data from "../spotify_data.history.json"
import React from "react";



function NrReproducao() {
 
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

  return (
    <div className="App">
      <p>{`${reproducoes.length}`}</p>
    </div>
  );
}

export default NrReproducao;
