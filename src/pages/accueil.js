// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import GithubProfileModal from "../components/GithubProfileModal";

function Accueil() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setShowModal();
  }, []);
  const user = {
    login: "github-john-doe",
    name: "John Doe",
    avatar_url: "https://avatars.githubusercontent.com/u/19842736?v=4",
    bio: "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.",
    public_repos: 1,
    followers: 16,
    following: 0,
    html_url: "https://github.com/github-john-doe",
  };
  return (
    <>
      <main>
        <div className="accueil">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <div className="container mt-5 text-center">
            <Button
              variant="primary"
              onClick={() => setShowModal(true)}
              style={{ backgroundColor: "red", borderStyle: "none" }}
            >
              En savoir plus
            </Button>

            <GithubProfileModal
              show={showModal}
              handleClose={() => setShowModal(false)}
              user={user}
            />
          </div>
        </div>
        <div className="ligne">
          <section className="presentation">
            <article className="colonne gauche ">
              <h3 className="apropos">À propos</h3>
              <div className="photo-box"></div>
              <p className="photo-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="photo-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="photo-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </article>
            <article className="colonne droite">
              <h3>Mes Compétences</h3>
              <h5 className="html">HTML5 90%</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-danger"
                  role="progressbar"
                  aria-label="Default striped example"
                  style={{ width: "90%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h5 className="css">CSS3 80%</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-info"
                  role="progressbar"
                  aria-label="Success striped example"
                  style={{ width: "80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h5 className="java">JAVASCRIPT 70%</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-warning"
                  role="progressbar"
                  aria-label="Info striped example"
                  style={{ width: "70%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h5 className="php">PHP 60%</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped bg-success"
                  role="progressbar"
                  aria-label="Warning striped example"
                  style={{ width: "60%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h5 className="react">REACT 50%</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped"
                  role="progressbar"
                  aria-label="Danger striped example"
                  style={{ width: "50%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}

export default Accueil;
