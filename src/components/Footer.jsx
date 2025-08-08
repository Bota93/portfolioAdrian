import React from 'react';

function Footer() {
    return (
      <>
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Adrián - Todos los derechos
            reservados
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://github.com/Bota93"
              title='GitHub'
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adrianalcarazrodriguez/"
              title='LinkedIn'
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
            </a>
            <a
              href="mailto:a.alcaraz.rodri@gmail.com"
              title='Email'
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="bi bi-envelope-fill" style={{ fontSize: "1.5rem" }}></i>
            </a>
          </div>
        </div>
      </footer>
    </>
    );
}

export default Footer;