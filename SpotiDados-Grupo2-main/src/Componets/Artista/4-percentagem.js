
import data from "../spotify_data.history.json"
import React from "react";



function TempoOuvirArtistaPercentagem () {
    
    const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);



    const artista = reproducoes.filter((e) => e.master_metadata_album_artist_name === "TOOL");

    const tempoOuvidoArtista = artista.reduce((acc, curr) => acc + curr.ms_played, 0);
    const tempoOuvidoEmMinutosArtista = Math.floor((tempoOuvidoArtista / 1000) / 60)


    const tempoOuvidoGeral = reproducoes.reduce((acc, curr) => acc + curr.ms_played, 0);
    const tempoOuvidoEmMinutosGeral = Math.floor((tempoOuvidoGeral / 1000) / 60)
 
    const percentagem =  Math.floor((tempoOuvidoEmMinutosArtista /tempoOuvidoEmMinutosGeral)*100)


  return (
    <div className="App">
      <p>{`${percentagem}%`}</p>
    </div>
  );
}

export default TempoOuvirArtistaPercentagem;