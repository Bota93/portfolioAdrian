import React from "react";
import "./Navbar.css";
import avatar from "/src/images/Logo_Adrian.png";
import useActiveSection from "../hooks/useActiveSection";

function Navbar() {
  const sections = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];
  const sectionIds = sections.map((s) => s.id);
  const activeId = useActiveSection(sectionIds);

  return (
    <>
      <header className="custom-navbar">
        <div className="nav-container d-flex justify-content-between align-items-center py-4">
          <div className="d-flex align-items-center gap-2">
            <img src={avatar} alt="Logo" className="avatar" />
            <span className="brand-name fw-bold text-white">
              Adrián Alcaraz Rodríguez
            </span>
            <i className="bi bi-patch-check-fill text-primary"></i>
          </div>
          <nav className="nav-links d-flex gap-4">
            {sections.map((section, i) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`nav-link text-white ${
                  activeId === section.id ? "active" : ""
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
          <div className="social-icons d-flex justify-content-center gap-3">
            <a
              href="https://github.com/Bota93"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="bi bi-github" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adrianalcarazrodriguez/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i>
            </a>
            <a
              href="mailto:a.alcaraz.rodri@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i
                className="bi bi-envelope-fill"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
