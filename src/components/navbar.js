import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          John Doe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white", marginLeft: 1200 }}
                aria-current="page"
                to="/Accueil"
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white" }}
                aria-current="page"
                to="/Services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white" }}
                aria-current="page"
                to="/Portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white" }}
                aria-current="page"
                to="/Contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white" }}
                aria-current="page"
                to="Mentions"
              >
                Mentions Légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
