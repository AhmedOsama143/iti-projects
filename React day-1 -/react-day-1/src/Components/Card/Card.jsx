import "./Card.css";
import React from "react";

export default function Card() {
  return (
    <>
      <section className="cards-section">
        <div className="cards-container">
          <div className="card">
            <img src="/img-1.jpg" alt="Card" />
            <h3> B Brand</h3>
            <p> B brand is a leading brand in the market.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <img src="/img-2.jpg" alt="Card" />
            <h3> B Brand</h3>
            <p> B brand is a leading brand in the market.</p>
            <button>Read More</button>
          </div>

          <div className="card">
            <img src="/img-3.jpg" alt="Card" />
            <h3> B Brand</h3>
            <p> B brand is a leading brand in the market.</p>
            <button>Read More</button>
          </div>
        </div>
      </section>
    </>
  );
}
