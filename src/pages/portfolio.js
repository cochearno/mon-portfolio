import React from "react";
import freshFood from "../assets/imagesport/portfolio/fresh-food.jpg";
import Akira from "../assets/imagesport/portfolio/restaurant-japonais.jpg";
import Zen from "../assets/imagesport/portfolio/espace-bien-etre.jpg";
import SEO from "../assets/imagesport/portfolio/seo.jpg";
import API from "../assets/imagesport/portfolio/coder.jpg";
import Screens from "../assets/imagesport/portfolio/screens.jpg";

function Portfolio() {
  return (
    <>
      <div className="banner"></div>
      <div className="portfolio1">
        <h3 className="titreport">Portfolio</h3>
        <h6 className="titrefolio">Voici quelques-unes de mes réalisations</h6>
        <div className="blue-line"></div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col md-4">
            <div className="card text-center">
              <img
                src={freshFood}
                className="card-img-top"
                alt="Panier de légumes frais sur une nappe vert et blanche "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Fresh Food</h5>
                <p className="card-text">
                  Site de vente de produits frais en ligne
                </p>
                <a href="/Portfolio" className="btn btn-primary">
                  Voir le Site
                </a>
              </div>
              <span className="real"> Sité réalisé avec PHP et MySql</span>
            </div>
          </div>
          <div className="col md-4">
            <div className="card text-center">
              <img
                src={Akira}
                className="card-img-top"
                alt="Panier de légumes frais sur une nappe vert et blanche "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">
                  Site de vente de produits frais en ligne
                </p>
                <a href="/Portfolio" className="btn btn-primary">
                  Voir le Site
                </a>
              </div>
              <span className="real"> Sité réalisé avec Wordpress</span>
            </div>
          </div>
          <div className="col md-4">
            <div className="card text-center">
              <img
                src={Zen}
                className="card-img-top"
                alt="Panier de légumes frais sur une nappe vert et blanche "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">
                  Site de vente de produits frais en ligne
                </p>
                <a href="/Portfolio" className="btn btn-primary">
                  Voir le Site
                </a>
              </div>
              <span className="real"> Sité réalisé avec LARAVEL</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col md-4">
            <div className="card text-center seo">
              <img
                src={SEO}
                className="card-img-top"
                alt="Panier de légumes frais sur une nappe vert et blanche "
              ></img>
              <div className="card-body">
                <h5 className="card-title">SEO</h5>
                <p className="card-text">
                  Amélioration du référencement d'un site e-commerce
                </p>
                <a href="/Portfolio" className="btn btn-primary">
                  Voir le Site
                </a>
              </div>
              <span className="real"> Utilisations des outils SEO</span>
            </div>
          </div>
          <div className="col md-4">
            <div className="card text-center api">
              <img
                src={API}
                className="card-img-top"
                alt="Panier de légumes frais sur une nappe vert et blanche "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Création d'une API</h5>
                <p className="card-text">
                  Création d'une API RESTFULL publique
                </p>
                <a href="/Portfolio" className="btn btn-primary">
                  Voir le Site
                </a>
              </div>
              <span className="real"> PHP - SYMFONY</span>
            </div>
          </div>
          <div className="col md-4">
            <div className="card text-center screen">
              <img
                src={Screens}
                className="card-img-top"
                alt="Panier de légumes frais sur une nappe vert et blanche "
              ></img>
              <div className="card-body">
                <h5 className="card-title">Maquette d'un site web</h5>
                <p className="card-text">Création du prototype d'un site</p>
                <a href="/Portfolio" className="btn btn-primary">
                  Voir le Site
                </a>
              </div>
              <span className="real"> Réalisé avec FIGMA</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
