import styles from "./styles.css";
import Vector from "./imgs/Vector.png";
import biblioteca from "./imgs/biblioteca.png";
import Home from "./imgs/Home.png";
import estatistica from "./imgs/estatistica.png";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul className="NavUL">
        <div className="logos">
          <img src={Home} alt="Home" />
          <li className="navLI">Home</li>
        </div>

        <div className="logos">
          <img src={Vector} alt="Search" />
          <li className="navLI">Pesquisa</li>
        </div>

        <div className="logos">
          <img src={biblioteca} alt="Search" />
          <li className="navLI">Biblioteca</li>
        </div>

        <hr className="tab_line" />

        <div className="logoEstatistica">
          <img src={estatistica} alt="estatistica" />
          <li className="navLI">Estatísticas</li>
        </div>
      </ul>
    </div>
  );
}
