import "./CardSection.css";
import Card from "../Card/Card";
import img1 from "../../assets/f1.png";
import img2 from "../../assets/f2.png";

import img3 from "../../assets/f3.png";

import img4 from "../../assets/f4.png";

import img5 from "../../assets/f5.png";

import img6 from "../../assets/f6.png";

import React from "react";

export default function CardSection() {
  return (
    <>
      <div className="card-section">
        <h2>Our Furtinures</h2>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum
          dolor sit amet consectetur adipisicing elit.{" "}
        </p>
        <div className="cards-container">
          <Card
            image={img1}
            title="Brown Chair Design"
            description="100$"
            buttonText={"BUY NOW"}
            buttonLink={"#"}
          />
          <Card
            image={img2}
            title="Duble bed Design"
            description="200$"
            buttonText={"BUY NOW"}
            buttonLink={"#"}
          />
          <Card
            image={img3}
            title="Office Chair"
            description="300$"
            buttonText={"BUY NOW"}
            buttonLink={"#"}
          />
          <Card
            image={img4}
            title="Wooden Bed"
            description="400$"
            buttonText={"BUY NOW"}
            buttonLink={"#"}
          />
          <Card
            image={img5}
            title="Simple Chair"
            description="500$"
            buttonText={"BUY NOW"}
            buttonLink={"#"}
          />
          <Card
            image={img6}
            title="Wooden Table"
            description="600$"
            buttonText={"BUY NOW"}
            buttonLink={"#"}
          />
        </div>
      </div>
    </>
  );
}
