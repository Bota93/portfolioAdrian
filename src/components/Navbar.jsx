import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Logo_Adrian from "/src/images/Logo_Adrian.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link
          to="hero" // Enlace al ID de la sección Hero
          spy={true}
          smooth={true}
          offset={-70} // Ajusta si el Navbar fijo oculta parte de la sección
          duration={500}
          className="navbar-brand"
        >
          <img
            src={Logo_Adrian}
            alt="Adrián Botana Logo"
            className="logo-img"
          />
          <span className="brand-text">Adrián Botana</span>
        </Link>

        {/* Botón de Hamburguesa para Móviles */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "bi bi-x" : "bi bi-list"}></i>{" "}
          {/* Icono de cruz o hamburguesa */}
        </div>

        {/* Menú de Navegación */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="about" // ID de la sección Sobre mí
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu} // Cierra el menú en móvil al hacer clic
              className="nav-link"
            >
              Sobre mí
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="technologies" // ID de la nueva sección Tecnologías
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="nav-link"
            >
              Tecnologías
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects" // ID de la sección Proyectos
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="nav-link"
            >
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact" // ID de la sección Contacto
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
              className="nav-link"
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