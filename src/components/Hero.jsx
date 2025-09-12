import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section
      id="hero"
      className="hero d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container text-center">
        <h1>Adrián Alcaraz Rodríguez</h1>
        <h2>
          Soy un <span className="highlight">Desarrollador Full-Stack</span>{" "}
          apasionado por crear soluciones web completas y eficientes.
        </h2>

        {/* Contenedor para los botones de acción */}
        <div className="cta-buttons mt-4">
          <a
            href="/public/CV_AdrianAlcarazRodriguez.pdf"
            className="btn btn-primary"
            download
          >
            Descargar CV
          </a>
          <a href="#contact" className="btn btn-secondary">
            Hablemos
          </a>
        </div>

        {/* Contenedor para los iconos de redes sociales */}
        <div className="social-links mt-4">
          <a
            href="https://www.linkedin.com/in/adrianalcarazrodriguez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/Bota93"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
