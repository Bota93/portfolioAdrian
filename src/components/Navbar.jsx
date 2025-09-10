import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; // Importa Link de react-scroll
import "./Navbar.css"; // Importa el CSS de la Navbar
import Logo_Adrian from "/src/images/Logo_Adrian.png"; // Asegúrate de que esta ruta sea correcta

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil
  const [isScrolled, setIsScrolled] = useState(false); // Estado para cambiar el Navbar al hacer scroll

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Efecto para cambiar el color del Navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Si el scroll es más de 50px
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
            alt="Adrián Alcaraz Rodríguez Logo"
            className="logo-img"
          />
          <span className="brand-text">Adrián Alcaraz Rodríguez</span>
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
