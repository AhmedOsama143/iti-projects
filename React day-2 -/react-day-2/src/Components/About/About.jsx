import AboutImage from "../../assets/about-img.png";
import Button from "../Button/Button";
import "./About.css";
import React from "react";

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="about-container">
          <div className="about-left">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
            <Button text={"Read More"} />
          </div>

          <div className="about-right">
            <img src={AboutImage} alt="Hero" />
          </div>
        </div>
      </section>
    </div>
  );
}
