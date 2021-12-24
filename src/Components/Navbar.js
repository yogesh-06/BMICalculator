import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../Images/Logo.png";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand text-danger bg-light px-1  rounded-2"
            style={{ display: "flex", alignItems: "flex-end" }}
            href="/"
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
                {/* <a
                  // to="/Introduction"
                  className="nav-link active"
                  aria-current="page"
                  href="#Introduction"
                >
                  Introduction
                </a> */}
                <div class="dropdown">
                  <a
                    class="dropdown-toggle text-dark"
                    style={{ textDecoration: "none" }}
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Introduction
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a class="dropdown-item" href="#WhatIsBMI">
                        What is BMI?
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#WhatIsBMIRange">
                        What is BMI range?
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  {/* Link */}
                </a>
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
