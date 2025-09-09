import React from "react";
import "./Technologies.css";

function Technologies() {
  return (
    <section className="technologies-section py-5" id="technologies">
      <div className="container">
        <h2 className="text-center mb-5">Tecnologías que Domino</h2>
        <div className="row text-center">
          {/* Categoría Frontend */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="tech-card h-100 p-4">
              <i className="bi bi-code-slash fs-1 mb-3"></i>
              <h4>Frontend</h4>
              <p>Java</p>
              <p>React</p>
              <p>Next.js</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>HTML5 & CSS3</p>
              <p>Tailwind CSS</p>
              <p>Bootstrap</p>
            </div>
          </div>

          {/* Categoría Backend */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="tech-card h-100 p-4">
              <i className="bi bi-hdd-stack fs-1 mb-3"></i>
              <h4>Backend</h4>
              <p>Python</p>
              <p>FastAPI</p>
              <p>Node.js (Básico)</p>
              <p>SQLAlchemy</p>
            </div>
          </div>

          {/* Categoría Bases de Datos */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="tech-card h-100 p-4">
              <i className="bi bi-database fs-1 mb-3"></i>
              <h4>Bases de Datos</h4>
              <p>PostgreSQL</p>
              <p>MySQL</p>
              <p>SQLite</p>
            </div>
          </div>

          {/* Categoría Herramientas y DevOps */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="tech-card h-100 p-4">
              <i className="bi bi-tools fs-1 mb-3"></i>
              <h4>Herramientas y DevOps</h4>
              <p>Git y GitHub</p>
              <p>Vercel</p>
              <p>Render</p>
              <p>Docker (Básico)</p>
              <p>CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
