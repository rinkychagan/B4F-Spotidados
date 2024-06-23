import data from "../spotify_data.history.json";
import React from "react";

// function TopFaixas () {
  
//     const top100Artistas = topFaixas()
//     return (
//         <div className="App">
//             <div>
//                 {top100Artistas.map((artista, index) => (
//                     <p key={index}>{`${index + 1}. ${artista.artista}`}</p>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default TopFaixas ;

export function topFaixas(){
    const reproducoes = data.filter(e => e.master_metadata_track_name !== null);

    const tempoPorArtista = {};

    reproducoes.forEach(reproducao => {
        const artista = reproducao.master_metadata_track_name;
        const tempo = reproducao.ms_played;

        tempoPorArtista[artista] = (tempoPorArtista[artista] || 0) + tempo;
    });

    
    const artistasTempoArray = Object.entries(tempoPorArtista).map(([artista, tempoTotal]) => ({
        artista,
        tempoTotal
    }));

    
    artistasTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);

   
    return artistasTempoArray.slice(0, 100);
}