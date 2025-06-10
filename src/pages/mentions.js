import React from "react";
import { Link } from "react-router-dom";

function Mentions() {
  return (
    <>
      <div>
        <h2 className="ment">Mentions Légales</h2>
        <div className="blue-line2"></div>
      </div>
      <div className="accordion d-block mx-auto" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Editeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h4 style={{ fontWeight: "bold" }}>Crédits</h4>
              <p>
                Ce site a été réalisé par John Doe, étudiant au {""}
                <Link to="https://www.centre-europeen-formation.fr">
                  Centre européen de formation.
                </Link>
              </p>
              <p style={{ fontStyle: "italic" }}>
                les images utilisées sur ce site sont libres de droits et ont
                été obtenues sur le site {""}
                <Link to="https://pixabay.com/fr/">Pixabay</Link>
              </p>
              <p style={{ fontStyle: "italic" }}>
                La favicon de ce site a été fournie par {""}
                <Link to="https://www.flaticon.com/free-icons/john-doe">
                  John doe Icons erstellt von Freepik - Flaticon
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentions;
