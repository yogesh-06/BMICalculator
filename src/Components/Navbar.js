import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light py-0">
        <div className="container-fluid">
          <Link
            to="/BMICalculator"
            className="navbar-brand text-danger bg-light px-1  rounded-2"
            style={{ display: "flex", alignItems: "flex-end" }}
            // href="/"
          >
            <img
              src="https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/cc/f1/f7/ccf1f7b1-d18d-f25d-40cb-c4c609dc5af8/source/512x512bb.jpg"
              alt=""
              className=""
              style={{ width: "30px" }}
            />
            <small className="fw-bold">BMI Calculator</small>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item p-2 navhover">
                <Link
                  to="/BMICalculator"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item p-2 navhover">
                <Link
                  to="/Overweight"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Obesity & Overweight
                </Link>
              </li>
              <li className="nav-item p-2 navhover">
                <Link
                  to="/Underweight"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Malnutrition
                </Link>
              </li>
              <li className="nav-item p-2 navhover">
                <Link
                  to="/Normalweight"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Fit & Healthy
                </Link>
              </li>
              <li className="nav-item p-2 navhover">
                <Link
                  to="/Contact"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  About Developer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
