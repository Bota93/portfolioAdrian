// src/components/Navbar.jsx (Versión corregida para el efecto de scroll)
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/Logo_Adrian.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Estado para el scroll

  // Función para manejar el evento de scroll
  // === CORRECCIÓN CLAVE AQUÍ: EL NOMBRE DE ESTA FUNCIÓN DEBE COINCIDIR CON EL useEffect ===
  const changeBackground = () => {
    // O puedes llamarla changeNavbarOnScroll si prefieres ese nombre
    if (window.scrollY >= 80) {
      // Umbral de scroll para activar el efecto
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // useEffect para añadir y limpiar el event listener
  useEffect(() => {
    // === CORRECCIÓN CLAVE AQUÍ: Asegúrate de que el nombre de la función sea 'changeBackground' ===
    window.addEventListener("scroll", changeBackground); // Añade el listener al montar

    return () => {
      window.removeEventListener("scroll", changeBackground); // Limpia el listener al desmontar
    };
  }, []); // El array vacío asegura que se ejecute solo una vez al montar y desmontar

  const handleClick = () => setClick(!click); // Asegurémonos de que handleClick está correcto
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
          {" "}
          {/* handleClick debe estar ligado aquí */}
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
