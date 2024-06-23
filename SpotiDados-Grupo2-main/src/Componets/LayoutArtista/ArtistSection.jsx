import React from "react";
import ArtistImg from "./ArtistImg";

export default function ArtistSection() {
  return (
    <div className="ArtistSection">
      <div className="ArtistDiv">
        <div className="ArtistImg">
          <ArtistImg />
        </div>
        <div className="ArtistTitle">
          <h1>SpotiDados</h1> {/*Pode receber uma props com nome do Artista */}
        </div>
      </div>
    </div>
  );
}
