import React, { useState } from 'react';
import TopAlbum from "../Listas/3-top-100-albuns";
import TopArtistasLogica from '../Listas/1-top-100-artista';
import TopFaixas from '../Listas/2-top-100-faixa';
import TopAlbum from '../Listas/3-top-100-albuns';



export default function ListaSetLogic() {

    
    const [selectedPeriod, setSelectedPeriod] = useState("Melhores Artistas");
    const [melhoresArtistas, setMelhoresArtistas] = useState(() => TopArtistasLogica());
    const [melhoresFaixas, setMelhoresFaixas] = useState(() => TopFaixas());
    const [melhoresAlbuns, setMelhoresAlbuns] = useState(() => TopAlbum());
  
    const updateLista = (period) => {
        setSelectedPeriod(period);
       
        if (period === "Melhores Artistas") {
            setMelhoresArtistas(TopArtistasLogica());
          
        }
        if (period === "Melhores Faixas") {
            setMelhoresFaixas(TopFaixas());
         
        }
        if (period === "Melhores Albuns") {
            setMelhoresAlbuns(TopAlbum());
        
        }
      };
  
    


  return (
    <div className="ListaSet">
      <div className="ListaSetBtn">
        <button onClick={()=> updateLista("Melhores Artistas")}>Melhores Artistas</button>
        <button>Melhores Faixas</button>
        <button>Melhores Albuns</button>
      </div>
    </div>
  );
}
