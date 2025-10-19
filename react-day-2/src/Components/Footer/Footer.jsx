import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>LOCATION</h3>
          <p>2215 Ahmed Osama Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className="footer-col">
          <h3>AROUND THE WEB</h3>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-solid fa-globe"></i>
          </div>
        </div>

        <div className="footer-col">
          <h3>ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Ahmed OSama.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Your Website 2025</p>
      </div>
    </footer>
  );
}
