import data from "./spotify_data.history.json";
import "./App.css";
import ArtistPage from "./Componets/Pages/ArtistPage";
import StatistcPage from "./Componets/Pages/StatisticPage";
import "./Componets/Pages/ArtistPage.css";
import NavBar from "./Componets/navBar";
import { TopArtistas } from "./Componets/topArtista";
import { TopAlbuns } from "./Componets/topAlbuns";
import ListaSet from "./Componets/LayoutStatGerais/ListaSet";
import { Playlist } from "./Componets/playlist";
import { useState } from "react";
import TempSet from "./Componets/LayoutStatGerais/TempSet";
import { TopArtistaUmAnito } from "./Componets/Artistaumanoagoravai";
import { TopArtistaSeisMesesito } from "./Componets/TopArtistaEmSeisMesito";
import { TopArtistaEmQuatroSemannhas } from "./Componets/TopArtistaEmQuatroSemanitas";
import { TopFaixaUmAnito } from "./Componets/TopFaxiaUmAnito";
import { TopFaixasSeisMesesito } from "./Componets/TopFaixasSeisMesesitos";
import { TopFaixasQuatrosemanitas } from "./Componets/TopFaixaQuartoSemanitas";
import { TopAlbunsEmUmAnito } from "./Componets/TopAlbumUmAnito";
import { TopAlbunsEmSeismesitos } from "./Componets/TopAlbumSeisMesesito";
import { TopAlbunsEmQuatroSemanitas } from "./Componets/TopAlbumEmQuatroSemanitas";
import { TopVinteArtista } from "./Componets/topVinteArtista";
import Top20EmUmAno from "./Componets/TempArtista/TempArtista/1-ano-Top20";
import Top20EmQuatroSemanas from "./Componets/TempArtista/TempArtista/4-semanas-Top20";
import Top20FaixaEmSeisMeses from "./Componets/TempArtista/TempArtista/6-meses-top20";


function App() {
  const [butao, setButao] = useState("artist"); //"track", "album"
  const [buttonTempo, setButtonTempo] = useState("4weeks"); //"6months", "1year", "alltime"

  function handlebutao(id) {
    setButao(id);
  }

  function handleButtonTempo(id) {
    setButtonTempo(id);
  }

  return (
    <div className="App">
      <div className="PageComponents">
        <NavBar />
        <ArtistPage />
        <StatistcPage />
        <div className="Setters">

        <ListaSet handle={handlebutao} />
        <TempSet current={buttonTempo} handle={handleButtonTempo} />
        {butao === "artist"  && (
          <div>
            {buttonTempo === "1year" && <TopArtistaUmAnito/>}
            {buttonTempo === "alltime" && <TopArtistas/>}
            {buttonTempo === "4weeks" && <TopArtistaEmQuatroSemannhas/>}
            {buttonTempo === "6months" && <TopArtistaSeisMesesito/>}
          </div>
        )}
        {butao === "track"  && (
          <div>
            {buttonTempo === "1year" && <TopFaixaUmAnito/>}
            {buttonTempo === "alltime" && <Playlist/>}
            {buttonTempo === "4weeks" && <TopFaixasQuatrosemanitas/>}
            {buttonTempo === "6months" && <TopFaixasSeisMesesito/>}
          </div>
        )}
        {butao === "album"  && (
          <div>
            {buttonTempo === "1year" && <TopAlbunsEmUmAnito/>}
            {buttonTempo === "alltime" && <TopAlbuns/>}
            {buttonTempo === "4weeks" && <TopAlbunsEmQuatroSemanitas/>}
            {buttonTempo === "6months" && <TopAlbunsEmSeismesitos/>}
          </div>
        )}

        </div>
      </div>

      <div>

      </div>
      <div><TopVinteArtista/></div>
      <div><Top20EmUmAno/></div>
      <div><Top20EmQuatroSemanas/></div>
      <div><Top20FaixaEmSeisMeses/></div>

    </div>

    
    
  );
  
}

export default App;
