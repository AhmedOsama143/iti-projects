import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed top-0 start-0 w-100 p-3"
      style={{ backgroundColor: "#2c3e50", zIndex: 1000 }}
    >
      <div className="container-fluid px-5">
        <Link className="navbar-brand text-white fw-bold fs-3" to="/">
          API React Project
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="mainNavbar"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-uppercase fw-bold"
                    : "nav-link text-white text-uppercase fw-bold"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-uppercase fw-bold"
                    : "nav-link text-white text-uppercase fw-bold"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-uppercase fw-bold"
                    : "nav-link text-white text-uppercase fw-bold"
                }
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active text-uppercase fw-bold"
                    : "nav-link text-white text-uppercase fw-bold"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
