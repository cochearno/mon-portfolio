import React from "react";
import { Placeholder } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <div className="titrecont">
        <h2>Contact</h2>
      </div>
      <p className="textcont">
        Pour me contacter en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formualire de contact
      </p>
      <div className="blue-line3"></div>
      <div className="ligne1">
        <section className="contact1">
          <article className="colonne2 gauche2">
            <h3 className="form">Formulaire de contact</h3>
            <form className="form">
              <input placeholder="Votre nom" className="formnom" required />
            </form>
            <form className="form">
              <input
                placeholder="Votre adresse email"
                className="formemail"
                required
              />
            </form>
            <form className="form">
              <input
                placeholder="Votre numéro de téléphone"
                className="formadresse"
                required
              />
            </form>
            <form className="form">
              <input placeholder="Sujet" className="formsujet" required />
            </form>
            <form className="form">
              <textarea
                placeholder="Votre message"
                className="formmessage"
                required
              />
            </form>
            <div className="form-btn-container">
              <button type="submit" className="formbutton">
                Envoyer
              </button>
            </div>
          </article>
          <article className="colonne2 droite2">
            <h3 className="coord">Mes coordonnées</h3>
          </article>
        </section>
      </div>
    </>
  );
};
export default Contact;
