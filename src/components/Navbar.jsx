import React, { useState } from "react"; // <--- ASEGÚRATE DE QUE useEffect YA NO ESTÉ AQUÍ
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/Logo_Adrian.png";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    // === RESTAURAR ESTA LÍNEA A SU ESTADO ORIGINAL ===
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="navbar-brand"
          onClick={closeMobileMenu}
        >
          <img src={logo} alt="Logo Adrián Alcaraz" className="logo-img" />
          <span className="brand-text">Adrián Alcaraz Rodríguez</span>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "bi bi-x" : "bi bi-list"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="sobre-mi"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Sobre mí
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="tecnologias"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Tecnologías
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="proyectos"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contacto"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
