import React from "react";
import "./About.css";
import photo from "/src/images/Logo_Adrian.png";

function About() {
  return (
    <>
      <section id="about" className="about section">
        <div className="about-container">
          <div className="about-image">
            <img src={photo} alt="Foto Adrián" />
          </div>
          <div className="about-text">
            <h2 className="section-title">Sobre mí</h2>
            <p>
              Soy un desarrollador Full-Stack con una gran curiosidad por
              transformar ideas en soluciones de software robustas y eficientes.
              Mi pasión por la tecnología va más allá de escribir código; me
              impulsa a entender cómo la arquitectura de una aplicación, desde
              el frontend hasta la base de datos, impacta en la experiencia
              final del usuario.
            </p>
            <p>
              Mi objetivo es especializarme en la creación de aplicaciones web
              completas. Disfruto tanto construyendo interfaces interactivas y
              reactivas con React y Next.js, como diseñando APIs escalables con
              Python y FastAPI. Busco una oportunidad donde pueda aportar mi
              energía, mi capacidad de aprendizaje rápido y seguir creciendo en
              un entorno de equipo dinámico.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
