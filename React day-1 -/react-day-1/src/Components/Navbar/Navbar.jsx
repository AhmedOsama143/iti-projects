import "./Navbar.css";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="nav-container">
          <a className="brand" href="#">
            <span className="logo">B</span>
            <span className="title">Brand</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a className="cta" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
