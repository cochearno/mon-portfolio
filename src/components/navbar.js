import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.scss";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{ textTransform: "uppercase" }}
          to="#"
        >
          John Doe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="/Accueil"
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="/Services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="/Portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="/Contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ color: "white", textTransform: "uppercase" }}
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
