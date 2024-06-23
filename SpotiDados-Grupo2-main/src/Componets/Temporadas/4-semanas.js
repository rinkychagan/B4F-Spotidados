import data from "../spotify_data.history.json";
import React from "react";

 export function TopArtistasEmQuatroSemanas() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);

  const ultimaData = reproducoes[reproducoes.length - 1].ts;
  const dataObj = new Date(ultimaData);
  const ultimaDataEmMilisegundos = dataObj.getTime();

  const umAnoEmMilisegundos = 1000 * 60 * 60 * 24 * 7 * 4;
  const dataMenosUmAno = ultimaDataEmMilisegundos - umAnoEmMilisegundos;

  const dataObj2 = new Date(dataMenosUmAno);

  const ano = dataObj2.getFullYear();
  const mes = ("0" + (dataObj.getMonth() + 1)).slice(-2); // Adiciona 1 ao mês, já que os meses são zero-indexados, e usa "slice" para garantir que tenha 2 dígitos
  const dia = ("0" + dataObj.getDate()).slice(-2); // Usa "slice" para garantir que tenha 2 dígitos
  const horas = ("0" + dataObj.getHours()).slice(-2); // Usa "slice" para garantir que tenha 2 dígitos
  const minutos = ("0" + dataObj.getMinutes()).slice(-2); // Usa "slice" para garantir que tenha 2 dígitos
  const segundos = ("0" + dataObj.getSeconds()).slice(-2); // Usa "slice" para garantir que tenha 2 dígitos

  const dataFormatada = `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}Z`;
  const reproducoesEmUmAno = reproducoes.filter((e) => e.ts >= dataFormatada);

  const tempoPorArtista = {};

  reproducoesEmUmAno.forEach((reproducao) => {
    const artista = reproducao.master_metadata_album_artist_name;
    const tempo = reproducao.ms_played;

    tempoPorArtista[artista] = (tempoPorArtista[artista] || 0) + tempo;
  });

  const artistasTempoArray = Object.entries(tempoPorArtista).map(
    ([artista, tempoTotal]) => ({
      artista,
      tempoTotal,
    })
  );

  artistasTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);

  // const top100Artistas = 
  return artistasTempoArray.slice(0, 100);}

//   return (
//     <div className="App">
//       <div>
//         {top100Artistas.map((artista, index) => (
//           <p key={index}>{`${index + 1}. ${artista.artista}`}</p>
//         ))}
//       </div>
//     </div>
//   );
// }
export default TopArtistasEmQuatroSemanas;
