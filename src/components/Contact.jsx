import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState({
    message: "",
    isError: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Deshabilitamos el botón al enviar
    setSubmissionStatus({ message: "", isError: false }); // Limpiamos mensajes anteriores

    emailjs
      .sendForm(
        "service_0gl208b",
        "template_s7xprxb",
        form.current,
        "TrFdfpZf1V4kz3thl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmissionStatus({
            message: "¡Mensaje enviado con éxito! Gracias por contactar.",
            isError: false,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmissionStatus({
            message: "Error al enviar. Por favor, inténtalo de nuevo.",
            isError: true,
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Volvemos a habilitar el botón
      });
  };

  return (
    <>
      <section id="contact" className="contact">
        <h2 className="contact-title">Contacto</h2>
        <div className="container-contact">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-fields">
              <input
                className="contact-name"
                type="text"
                name="name"
                placeholder="Nombre"
                required
              />
              <input
                className="contact-email"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
              />
              <textarea
                className="contact-message"
                name="message"
                placeholder="Mensaje"
                required
              ></textarea>
            </div>
            <button
              className="contact-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>

            {submissionStatus.message && (
              <p
                className={`submission-message ${
                  submissionStatus.isError ? "error" : "success"
                }`}
              >
                {submissionStatus.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
