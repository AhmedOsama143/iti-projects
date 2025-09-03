import "./Navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="nav-container">
          <a className="brand" href="#">
            <span className="title">NEWHOME</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#furtinures">Furtinures</a>
            <a href="#blog">Blog</a>
            <a className="cta" href="#contact">
              Contact Us
            </a>
          </div>
          <div className="nav-actions">
            <a className="login" href="#">
              Login
            </a>
            <a>
              <i className="fa-solid fa-search"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
