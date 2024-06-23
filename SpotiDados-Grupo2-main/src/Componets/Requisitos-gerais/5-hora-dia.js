import data from "../spotify_data.history.json";
import React from "react";

function HoraMaisOuvida() {
  const reproducoes = data.filter((e) => e.master_metadata_track_name !== null);
  const datasDeReproducao = reproducoes.map((objeto) => objeto.ts);
  

  const horas = datasDeReproducao.map(e => new Date(e).getUTCHours());


const contagemHoras = horas.reduce((acc, hora) => {
    acc[hora] = (acc[hora] || 0) + 1;
    return acc;
}, {});


let horaMaisRepetida;
let maxOcorrencias = 0;

for (const hora in contagemHoras) {
    if (contagemHoras[hora] > maxOcorrencias) {
        maxOcorrencias = contagemHoras[hora];
        horaMaisRepetida = hora;
    }
}

  return (
    <div className="App">
      <p>{`${horaMaisRepetida}:00`}</p>
    </div>
  );
}

export default HoraMaisOuvida;
