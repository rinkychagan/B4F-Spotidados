import styles from "./styles.css";

export function TopArtistas() {
  return (
    <div className="playlistDIV">
      <div className="infos">
        <p>#</p>
        <p>Artista</p>
      </div>
      <hr className="line" />
      <ul>
        <li className="infoDaMusica">
          <div>
            <p className="ordem">1</p>
          </div>
          <div className="Artista">
            <p className="Top_Artista">Artista</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
