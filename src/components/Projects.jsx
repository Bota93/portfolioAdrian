import React from "react";
import "./Projects.css";
import myFianceImage from "/src/images/myfiance.png";

const projectList = [
  {
    title: "MyFiance - App de finanzas",
    description:
      "Aplicación web completa para la gestión de finanzas personales, construida con un stack moderno. Permite a los usuarios realizar operaciones CRUD sobre sus transacciones y cuenta con un modo 'demo' para una fácil visualización.",
    image: myFianceImage,
    technologies: [
      "React",
      "Next,js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Vercel",
      "Render",
    ],
    livelink: "https://my-fiance-jk6x.vercel.app/",
    codeLink: "https://github.com/Bota93/MyFiance",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-title text-center mb-5">Proyecto Destacado</h2>
        <div className="row justify-content-center">
          {" "}
          {/* Centramos la fila */}
          {projectList.map((project, index) => (
            // Ajustamos la columna para que ocupe más espacio al ser un solo elemento
            <div className="col-lg-8 col-md-10 mb-4" key={index}>
              <div className="card project-card h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>

                  <div className="mt-auto">
                    <div className="technologies-list mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={project.liveLink}
                        className="btn btn-primary me-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Proyecto
                      </a>
                      <a
                        href={project.codeLink}
                        className="btn btn-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Código
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;