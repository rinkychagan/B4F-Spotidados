import styles from "./styles.css";

export function Playlist() {
  return (
    <div className="playlistDIV">
      <div className="infos">
        <p>#</p>
        <p>Título</p>
      </div>
      <hr className="line" />
      <ul>
        <li className="infoDaMusica">
          <div>
            <p className="ordem">1</p>
          </div>
          <div className="artistaEMusica">
            <p className="nomeMusica">Título da Canção</p>
            <div className="artistaEAlbum">
              <p className="nomeArtista">Artista</p>
              <span>•</span>
              <p className="nomeAlbum">Álbum</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
