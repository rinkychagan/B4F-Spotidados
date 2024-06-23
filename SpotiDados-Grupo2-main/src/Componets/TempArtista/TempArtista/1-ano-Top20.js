import data from "./spotify_data.history.json";

import React from "react";

function Top20EmUmAno() {
  // Filtrar reproduções apenas do artista TOOL
  const reproducoes = data.filter(
    (e) =>
      e.master_metadata_track_name !== null &&
      e.master_metadata_album_artist_name === "TOOL"
  );

  // Obter a data atual
  const dataAtual = new Date();

  // Calcular a data há 1 ano atrás
  const umAnoAtras = new Date(dataAtual);
  umAnoAtras.setFullYear(umAnoAtras.getFullYear() - 1);

  // Filtrar as reproduções apenas dos últimos 12 meses
  const reproducoesNosUltimosDozeMeses = reproducoes.filter((reproducao) => {
    const dataReproducao = new Date(reproducao.ts);
    return dataReproducao >= umAnoAtras && dataReproducao <= dataAtual;
  });

  // Contar as reproduções de cada faixa nos últimos 12 meses
  const tempoPorFaixa = {};
  reproducoesNosUltimosDozeMeses.forEach((reproducao) => {
    const faixa = reproducao.master_metadata_track_name;
    const tempo = reproducao.ms_played;
    tempoPorFaixa[faixa] = (tempoPorFaixa[faixa] || 0) + tempo;
  });

  // Transformar em um array de objetos com faixa e tempo total
  const faixasTempoArray = Object.entries(tempoPorFaixa).map(
    ([faixa, tempoTotal]) => ({
      faixa,
      tempoTotal,
    })
  );

  // Ordenar as faixas pelo tempo total e limitar a 20 faixas
  faixasTempoArray.sort((a, b) => b.tempoTotal - a.tempoTotal);
  const top20Faixas = faixasTempoArray.slice(0, 20);

  return (
    <div className="playlistDIV">
      <div className="infos">
      <p>#</p>
        <p>Título</p>
      <p>Top 20: Último Ano</p>
      </div>
      <hr className="line" />
      <ul>
        {top20Faixas.map((faixa, index) => (

          <li className="infoDaMusica">
          <div>
            <p key={index} className="ordem">
              {index + 1}
            </p>
          </div>
          <div className="artistaEMusica">
            <p className="nomeMusica" key={index}>
              {faixa.faixa}
            </p>
          </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Top20EmUmAno;
