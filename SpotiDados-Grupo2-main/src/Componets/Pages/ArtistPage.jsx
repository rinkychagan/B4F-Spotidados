import React from "react";
import ArtistSection from "../LayoutArtista/ArtistSection";
import StatArtist from "../LayoutArtista/StatArtist";
import TempSet from "../LayoutStatGerais/TempSet";

export default function ArtistPage() {
  return (
    <div className="ArtistPage">
      <ArtistSection />
      <StatArtist />
    </div>
  );
}
