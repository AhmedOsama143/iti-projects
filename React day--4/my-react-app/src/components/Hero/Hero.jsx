import React from "react";
import avatar from "../../assets/imgs/avataaars.png";
import "./Hero.css";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="container text-center p-3 mt-5">
        <img src={avatar} alt="avatar" />
        <h1 className="text-white display-6 fw-bold mt-4">2nd project React</h1>

        <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
          <div id="line"></div>
          <i className="fa fa-solid fa-star text-white"></i>
          <div id="line"></div>
        </div>

        <p className="text-white mb-0">
          Graphic Artist - Web Designer - Illustrator - Ahmed Osama Kholief
        </p>
      </div>
    </section>
  );
}
