import React from 'react';

function Contact() {
    return (
      <section id="contact" className="py-5 bh-white">
        <div className="container">
          <h2 className="text-center mb-4">Contacto</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="name" placeholder="Tu nombre"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" placeholder="ejemplo@ejemplo.com"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;