import React from 'react';

function About() {
    return (
        <section id="about" className="py-5 bg-white">
            <div className="container">
                <h2 className="mb-4 text-center">Sobre mí</h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="public/images/Logo_Adrian.png" alt="Adrián" className="img-fluid rounded" />
                    </div>
                    <div>
                        <p>
                            Soy un desarrollador junior apasionado por la tecnología y el desarrollo web. 
                            Me encanta aprender nuevas herramientas y lenguajes de programación, y siempre estoy buscando mejorar mis habilidades.
                        </p>
                        <p>
                            Actualmente me estoy especializando en React y Node.js, 
                            y he trabajado en varios proyectos que me han permitido aplicar mis conocimientos y aprender de la experiencia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;