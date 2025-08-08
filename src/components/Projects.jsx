import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1.",
    image: "src/images/Logo_Adrian.png",
    link: "#",
  },
];

function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <h2 className="projects-title">Proyectos</h2>
        <div className="container-projects">
          <div className="row">
            {projectList.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
