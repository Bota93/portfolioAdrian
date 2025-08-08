import React from "react";
import "./About.css";
import photo from "/public/images/Logo_Adrian.png";

function About() {
  return (
    <section id="about" className="about section">
      <div className="about-container">
        <div className="about-image">
          <img
            src={photo}
            alt="Foto Adrián"
          />
        </div>
        <div className="about-text">
          <h2 className="section-title">Sobre mí</h2>
          <p>
            Soy un desarrollador junior apasionado por la tecnología y el
            desarrollo web. Me encanta aprender nuevas herramientas y lenguajes
            de programación, y siempre estoy buscando mejorar mis habilidades.
          </p>
          <p>
            Actualmente me estoy especializando en React y Node.js, y he
            trabajado en varios proyectos que me han permitido aplicar mis
            conocimientos y aprender de la experiencia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
