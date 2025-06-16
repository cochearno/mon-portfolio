import React from "react";
import { Link, NavLink } from "react-router-dom";
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
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="/Accueil"
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="/Services"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="/Portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="/Contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
                style={{ color: "white", textTransform: "uppercase" }}
                aria-current="page"
                to="Mentions"
              >
                Mentions Légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
