import data from "../spotify_data.history.json";
import React from "react";

export function TopAlbumEmSeisMeses() {
  const reproducoes = data.filter(
    (e) => e.master_metadata_album_album_name !== null
  );

  const ultimaData = reproducoes[reproducoes.length - 1].ts;
  const dataObj = new Date(ultimaData);
  const ultimaDataEmMilisegundos = dataObj.getTime();

  const seisMesesEmMilisegundos = 1000 * 60 * 60 * 24 * 30 * 6;
  const dataMenosSeisMeses = ultimaDataEmMilisegundos - seisMesesEmMilisegundos;

  const dataObj2 = new Date(dataMenosSeisMeses);

  const ano = dataObj2.getFullYear();
  const mes = ("0" + (dataObj2.getMonth() + 1)).slice(-2);
  const dia = ("0" + dataObj2.getDate()).slice(-2);
  const horas = ("0" + dataObj2.getHours()).slice(-2);
  const minutos = ("0" + dataObj2.getMinutes()).slice(-2);
  const segundos = ("0" + dataObj2.getSeconds()).slice(-2);

  const dataFormatada = `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}Z`;
  const reproducoesEmSeisMeses = reproducoes.filter(
    (e) => e.ts >= dataFormatada
  );

  const tempoPorAlbum = {};

  reproducoesEmSeisMeses.forEach((reproducao) => {
    const album = reproducao.master_metadata_album_album_name;
    const tempo = reproducao.ms_played;

    tempoPorAlbum[album] = (tempoPorAlbum[album] || 0) + tempo;
  });

  const albunsTempoArray = Object.entries(tempoPorAlbum).map(
    ([album, tempoTotal]) => ({
      album,
      tempoTotal,
    })
  );

  albunsTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);

  // const top100Albuns = 
  return albunsTempoArray.slice(0, 100);}

//   return (
//     <div className="App">
//       <div>
//         {top100Albuns.map((album, index) => (
//           <p key={index}>{`${index + 1}. ${album.album}`}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

export default TopAlbumEmSeisMeses;
