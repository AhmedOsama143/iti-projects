import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-white text-center pt-5">
      <div className="container py-5">
        <div className="row  d-flex justify-content-between text-start">
          <div className="col-md-6 ">
            <h3>LOCATION</h3>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-6 ">
            <h3>About Project</h3>
            <p>
              This is a React project from <strong>Ahmed Osama Kholief</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
