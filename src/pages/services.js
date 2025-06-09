import React from "react";

function Services() {
  return (
    <>
      <div className="banner"></div>
      <div className="offre">
        <h3 className="titreoffre">Mon offre de services</h3>
        <h6 className="titrepresta">
          Voici les prestations sur lesquelles je peux intervenir
        </h6>
        <div className="blue-line"></div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-center">
              <i className="bi bi-brush icon-service"></i>
              <div className="card-body">
                <h5 className="card-title">UX Design</h5>
                <p className="card-text">
                  L'UX Design est une discipline qui consiste à concenoir des
                  produits (sites web, applications mobiles, logiciels, objet
                  connectés, etc ...) en plaçant l'utilisateur au centre des
                  préoccupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <i className="bi bi-code-slash icon-service"></i>
              <div className="card-body">
                <h5 className="card-title">Développement Web</h5>
                <p className="card-text">
                  Le développement de sites web consiste à créer des sites
                  internet en utlisant des languages de programmation (HTML,
                  CSS, Javascript, PHP, etc ...) et des frameworks (Bootstrap,
                  React, Angular, etc ...).
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <i className="bi bi-search icon-service"></i>
              <div className="card-body">
                <h5 className="card-title">Référencement</h5>
                <p className="card-text">
                  Lez référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo, etc
                  ...). L'objectif est d'attirer un maximum de visiteurs
                  qualifiés sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
