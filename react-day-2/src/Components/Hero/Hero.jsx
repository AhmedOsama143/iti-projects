import Button from "../Button/Button";
import "./Hero.css";
import HeroImage from "../../assets/slider-img.png";
import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1>For All Your Furnitures Needs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </p>
            <button className="hero-btn"> Contact Us </button>
            <Button text="About Us" />
          </div>

          <div className="hero-right">
            <img src={HeroImage} alt="Hero" />
          </div>
        </div>
      </section>
    </div>
  );
}
