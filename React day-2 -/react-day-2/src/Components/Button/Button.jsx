import "./Button.css";
import React from "react";

export default function Button({ text }) {
  return (
    <>
      <button className="main-btn">{text}</button>
    </>
  );
}
