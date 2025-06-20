import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer footer-expand-lg bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h5 className="hfoot">John Doe</h5>
              <p className="adress">40 rue Laure Diebold</p>
              <p className="cp">69009 Lyon, France</p>
              <p className="tel">10 20 30 40 50</p>
              <p className="mail"> john.doe@gmail.com</p>
              <div className="icon">
                <a
                  className="fag"
                  href="https://github.com"
                  target="blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaGithub size={25} color="#909590" />
                </a>
                <a
                  className="fat"
                  href="https://x.com"
                  target="blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaTwitter size={25} color="#909590" />
                </a>
                <a
                  className="fal"
                  href="https://linkedin.com"
                  target="blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FaLinkedin size={25} color="#909590" />
                </a>
              </div>
            </div>
            <div className="col-4">
              <h5 className="hfoot">Liens Utiles</h5>
              <Link
                to="/Accueil"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="home">Accueil</p>
              </Link>
              <Link
                to="/Services"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="services">Services</p>
              </Link>
              <Link
                to="/Portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="portfolio">Portfolio</p>
              </Link>
              <Link
                to="contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="contact">Me Contacter</p>
              </Link>
              <Link
                to="Mentions"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="mentions">Mentions légales</p>
              </Link>
            </div>
            <div className="col-4">
              <h5 className="hfoot">Mes dernières réalisations</h5>
              <Link
                to="portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="fresh">Fresh Food</p>
              </Link>
              <Link
                to="portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="akira">Restaurant Akira</p>
              </Link>
              <Link
                to="portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="bienetre">Espace bien-être</p>
              </Link>
              <Link
                to="portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="seo1">SEO</p>
              </Link>
              <Link
                to="protfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="api1">Création d'une API</p>
              </Link>
              <Link
                to="portfolio"
                style={{ textDecoration: "none", color: "white" }}
              >
                <p className="maquette">Maquette d'un site</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
