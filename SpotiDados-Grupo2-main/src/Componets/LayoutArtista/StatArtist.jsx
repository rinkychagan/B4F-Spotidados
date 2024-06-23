
import React from "react";
import EstacaoMaisOuvidaDoArtista from "../Artista/7-estacao-ano";
import TempoOuvirArtistaPercentagem from "../Artista/4-percentagem";
import PosicaoNoTop100 from "../Artista/6-top100-posicao";

export default function StatArtist() {
  return (
    <div className="StatArtist">
      {" "}
      {/* Adicionado classe "StatArtist" */}
      <div className="StArtTitle">
        <h1>Estatísticas Top Artista: TOOL </h1>
      </div>
      <div className="StatArtistDiv">
        <div className="EstacaoTitle">
          <h3>Estação do ano</h3>
          <h4>{EstacaoMaisOuvidaDoArtista()}</h4>
          {/* Removido espaço extra antes e depois da interpolação */}
        </div>
        <div className="TopTitle">
          <h3>Top 100</h3>
          <h4>{PosicaoNoTop100()}</h4>
          {/* Removido espaço extra antes e depois da interpolação */}
        </div>
        <div className="PorctTitle">
          <h3>Porcentagem de streamings</h3>
          <h4>{TempoOuvirArtistaPercentagem()}</h4>
        </div>
      </div>
    </div>
  );
}


