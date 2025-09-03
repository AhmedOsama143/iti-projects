import React from "react";
import "./SecCard.css";
import Button from "../Button/Button";

export default function SecCard({
  image,
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="sec-card">
      <img src={image} alt={title} className="sec-card-image" />
      <div className="sec-card-body">
        <h3 className="sec-card-title">{title}</h3>
        <p className="sec-card-description">{description}</p>
        <Button text={buttonText} link={buttonLink} />
      </div>
    </div>
  );
}
