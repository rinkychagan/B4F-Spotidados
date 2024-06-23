import data from "../spotify_data.history.json"
import React from "react";

export function TopAlbunsEmUmAno() {
  const reproducoes = data.filter(
    (e) => e.master_metadata_album_album_name !== null
  );

  const ultimaData = reproducoes[reproducoes.length - 1].ts;
  const dataObj = new Date(ultimaData);
  const ultimaDataEmMilisegundos = dataObj.getTime();

  const umAnoEmMilisegundos = 1000 * 60 * 60 * 24 * 365;
  const dataMenosUmAno = ultimaDataEmMilisegundos - umAnoEmMilisegundos;

  const dataObj2 = new Date(dataMenosUmAno);

  const ano = dataObj2.getFullYear();
  const mes = ("0" + (dataObj.getMonth() + 1)).slice(-2);
  const dia = ("0" + dataObj.getDate()).slice(-2);
  const horas = ("0" + dataObj.getHours()).slice(-2);
  const minutos = ("0" + dataObj.getMinutes()).slice(-2);
  const segundos = ("0" + dataObj.getSeconds()).slice(-2);

  const dataFormatada = `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}Z`;
  const reproducoesEmUmAno = reproducoes.filter((e) => e.ts >= dataFormatada);

  const tempoPorAlbum = {};

  reproducoesEmUmAno.forEach((reproducao) => {
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

  // const top100albuns =
  return albunsTempoArray.slice(0, 100);}

//   return (
//     <div className="App">
//       <div>
//         {top100albuns.map((album, index) => (
//           <p key={index}>{`${index + 1}. ${album.album}`}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

export default TopAlbunsEmUmAno;
