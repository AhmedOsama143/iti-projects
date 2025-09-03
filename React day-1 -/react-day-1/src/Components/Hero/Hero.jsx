import "./Hero.css";
import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1>Welcome to B Brand</h1>
            <p>
              We are a team of talented designers and developers who are
              passionate about creating beautiful and functional websites.
            </p>
            <button className="hero-btn"> Start Now</button>
          </div>

          <div className="hero-right">
            <img src="/work-3.jpg" alt="Hero" />
          </div>
        </div>
      </section>
    </div>
  );
}
