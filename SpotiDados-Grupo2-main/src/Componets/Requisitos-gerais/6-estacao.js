import data from "../spotify_data.history.json";
import React from "react";

function EstacaoMaisOuvida() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
  const datasDeReproducao = reproducoes.map((objeto) => objeto.ts);

  
  function calculaEstacaoDoAno(dia, mes) {
    if (dia < 1 || dia > 31) return "Por favor introduza um dia entre 1 e 31.";
    if (mes < 1 || mes > 12) return "Por favor introduza um mês entre 1 e 12.";
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30)
      return "Por favor introduza um dia entre 1 e 30.";
    if (mes === 2 && dia > 28) return "Por favor introduza um dia entre 1 e 28.";

    const estacao = {
      1: "Inverno",
      2: "Inverno",
      3: "Primavera",
      4: "Primavera",
      5: "Primavera",
      6: "Verão",
      7: "Verão",
      8: "Verão",
      9: "Outono",
      10: "Outono",
      11: "Outono",
      12: "Inverno",
    };

    if (mes === 1 && dia < 21) {
      return estacao[12];
    } else if (dia < 21) {
      return estacao[mes - 1];
    }
    return estacao[mes];
  }

  
  const contagemEstacoes = {
    Inverno: 0,
    Primavera: 0,
    Verão: 0,
    Outono: 0,
  };

  
  datasDeReproducao.forEach((dataReproducao) => {
    const data = new Date(dataReproducao);
    const diaDoMes = data.getUTCDate();
    const mesDoAno = data.getUTCMonth() + 1;
    const estacao = calculaEstacaoDoAno(diaDoMes, mesDoAno);
    contagemEstacoes[estacao]++;
  });

 
  let estacaoMaisOuvida = "";
  let maxOcorrencias = 0;
  for (const estacao in contagemEstacoes) {
    if (contagemEstacoes[estacao] > maxOcorrencias) {
      estacaoMaisOuvida = estacao;
      maxOcorrencias = contagemEstacoes[estacao];
    }
  }

  return (
    <div className="App">
      <p>{`${estacaoMaisOuvida}`}</p>
    </div>
  );
}

export default EstacaoMaisOuvida;
