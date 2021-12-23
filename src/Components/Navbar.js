import React from "react";
// import Logo from "../Images/Logo.png";
const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fw-bold mb-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold text-danger bg-light px-1  rounded-2"
            style={{ display: "flex", alignItems: "flex-end" }}
            href="/"
          >
            <img
              src="https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/cc/f1/f7/ccf1f7b1-d18d-f25d-40cb-c4c609dc5af8/source/512x512bb.jpg"
              alt=""
              className=""
              style={{ width: "30px" }}
            />
            <small className="">BMI Calculator</small>
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  {/* Introduction */}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
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
