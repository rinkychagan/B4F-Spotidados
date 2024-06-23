import styles from "../styles"


export function TopAlbuns() {
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
            <p className="nomeDoAlbum">Álbum</p>
            <p className="artistaDoAlbum">Artista</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
