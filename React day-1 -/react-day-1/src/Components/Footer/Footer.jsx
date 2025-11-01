import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p>All rights reserved &copy; 2023</p>
          <div className="footer-links">
            <a href="#privacy">privacy policy</a>
            <a href="#terms"> terms & conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
}
