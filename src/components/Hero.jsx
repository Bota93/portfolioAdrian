import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
    >
      <div className="w-100 text-center px-3">
        <img
          src="/images/Logo_Adrian.png"
          alt="Logo"
          className="hero-logo"
        />
        <h1 className="display-4 fw-bold text-white" >¡Hola! Soy Adrián</h1>
        <p className="lead text-white">Desarrollador Web y FullStack</p>
        
        <button className="hero-button">Ver proyectos</button>
      </div>
    </section>
  );
}

export default Hero;
