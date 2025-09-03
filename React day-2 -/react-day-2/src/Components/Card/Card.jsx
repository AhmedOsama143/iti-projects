import React from "react";
import "./Card.css";

export default function Card({
  image,
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {buttonText && buttonLink && (
        <a href={buttonLink} className="card-button">
          {buttonText}
        </a>
      )}
    </div>
  );
}
