import React from "react";
import "./Hero.css"; 

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="hero"
      className="hero-section d-flex text-center px-3"
    >
      <div className="w-100 text-center px-3">
        <p className="hero-quote">
          “No te preocupes por fracasar. Solo tienes que acertar una vez.”
          <br />
          <span className="quote-author">— Drew Houston (CEO de Dropbox)</span>
        </p>
        <p className="hero-intro">HOLA, MI NOMBRE ES ADRIÁN</p>
        <h1 className="hero-title">Estoy en modo construcción constante.</h1>
        <p className="hero-subtitle">
          Acabo de terminar mi grado de desarrollo y sigo programando cada día
          para mejorar mis habilidades. Me gustan los proyectos que resuelven
          problemas concretos con código limpio y funcional.
        </p>
        <button className="hero-button mt-4" onClick={scrollToProjects}>
          Ver Proyectos
        </button>
      </div>
    </section>
  );
}

export default Hero;
