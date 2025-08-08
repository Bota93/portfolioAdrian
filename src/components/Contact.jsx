import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

function Contact() {
  // Create a ref to the form
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

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
            alert("Mensaje enviado correctamente");
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
            alert(
              "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
            );
          }
        );
    };
    
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contacto</h2>
      <div className="container-contact">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-fields">
            <input className="contact-name" type="text" name="name" placeholder="Nombre" required />
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
          <button className="contact-submit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
