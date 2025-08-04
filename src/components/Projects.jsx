import React from 'react';

const projectList = [
    {
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1.',
        image: 'public/images/Logo_Adrian.png',
        link: '#'
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2.',
        image: 'public/images/Logo_Adrian.png',
        link: '#'
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3.',
        image: 'public/images/Logo_Adrian.png',
        link: '#'
    }
]

function Projects() {
    return (
        <section id="projects" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Proyectos</h2>
                <div className="row">
                    {projectList.map((project, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                            <div className="card mb-4">
                                <img src={project.image} alt={project.title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.link} className="btn btn-primary">Ver más</a>
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