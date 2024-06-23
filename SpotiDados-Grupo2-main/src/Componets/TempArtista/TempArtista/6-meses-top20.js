import data from "./spotify_data.history.json";
import React from "react";

function Top20FaixaEmSeisMeses() {
  const reproducoes = data.filter(
    (e) =>
      e.master_metadata_track_name !== null &&
      e.master_metadata_album_artist_name === "TOOL"
  );

  // Obter a data atual
  const dataAtual = new Date();

  // Calcular a data há 6 meses atrás
  const seisMesesAtras = new Date();
  seisMesesAtras.setMonth(seisMesesAtras.getMonth() - 6);

  // Filtrar as reproduções apenas dos últimos 6 meses
  const reproducoesNosUltimosSeisMeses = reproducoes.filter((reproducao) => {
    const dataReproducao = new Date(reproducao.ts);
    return dataReproducao >= seisMesesAtras && dataReproducao <= dataAtual;
  });

  // Contar as reproduções de cada faixa nos últimos 6 meses
  const tempoPorFaixa = {};
  reproducoesNosUltimosSeisMeses.forEach((reproducao) => {
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
      <p>Top 20: 6 Meses</p>
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

export default Top20FaixaEmSeisMeses;
