import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../Images/Logo.png";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top bg-light"
        // style={{ backgroundColor: "#255, 97, 97" }}
      >
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/Introduction"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Introduction
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Overweight"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Obesity & Overweight
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Underweight"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Malnutritian
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Normalweight"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Fit & Healthy
                </Link>
              </li>
            </ul>
          </div>
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
        </div>
      </nav>
    </>
  );
};
export default Navbar;
