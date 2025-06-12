import React from "react";

function Contact() {
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
            <h5 className="coordjd">John Doe</h5>
            <div className="mapicon">
              <i className="bi bi-map" style={{ fontStyle: "normal" }}></i> 40
              rue Laure Diebold
            </div>
            <div className="geoicon">
              <i className="bi bi-geo-alt" style={{ fontStyle: "normal" }}></i>{" "}
              69009 Lyon, France
            </div>
            <div className="phoneicon">
              <i className="bi bi-phone" style={{ fontStyle: "normal" }}></i> 10
              20 30 40 50
            </div>
            <div className="mailicon">
              <i
                className="bi bi-envelope-at"
                style={{ fontStyle: "normal" }}
              ></i>{" "}
              john.doe@gmail.com
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621793!2d4.796403976516667!3d45.7786619710808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1749734358952!5m2!1sfr!2sfr"
                width="350"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="carte rue diebold"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
export default Contact;
