import React from "react";
import freshFood from "../assets/imagesport/portfolio/fresh-food.jpg";

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
        </div>
      </div>
    </>
  );
}

export default Portfolio;
