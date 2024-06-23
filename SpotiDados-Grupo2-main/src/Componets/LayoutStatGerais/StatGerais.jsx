import React from "react";
import TempoAOuvir from "../Requisitos-gerais/3-q-tempo-ouvir";
import NrReproducao from "../Requisitos-gerais/1-q-reproducoes";
import NrFaixasDiferentes from "../Requisitos-gerais/2-q-faixas-diferentes";
import MediaDiaria from "../Requisitos-gerais/4-media-diaria";
import HoraMaisOuvida from "../Requisitos-gerais/5-hora-dia";
import EstacaoMaisOuvida from "../Requisitos-gerais/6-estacao";

export default function StatGerais() {
  return (
    <div className="StatGerais">
      <div className="StatTotais">
        <h2>Suas Estatísticas Gerais</h2>
        <div className="StatTotaisTitle">
          <div className="TempoTitle">
            <h3>Minutos Ouvidos</h3>
            <h2> {TempoAOuvir()}</h2>
          </div>
          <div className="ReproducaoTitle">
            <h3>Total de Reprodução</h3>
            <h2> {NrReproducao()}</h2>
          </div>
          <div className="FaixasTitle">
            <h3>Total de Faixas</h3>
            <h2> {NrFaixasDiferentes()}</h2>
          </div>
        </div>
      </div>

      <div className="StatTemporais">
        <h2>Estatisticas Temporais</h2>
        <div className="StatTemporaisTitle">
          <div className="MediaDiaTitle">
            <h3>Média diária</h3>
            <h2> {MediaDiaria()}</h2>
          </div>
          <div className="HorarioTitle">
            <h3>Horário mais Ativo</h3>
            <h2> {HoraMaisOuvida()}</h2>
          </div>
          <div className="EstacaoTitle">
            <h3>Estação do Ano</h3>
            <h2> {EstacaoMaisOuvida()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
