import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f9fcfd" }} className="mt-5 py-4">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-md-3 col-sm-6 my-4">
              <div
                className="text-danger mb-1"
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <img
                  src="https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/cc/f1/f7/ccf1f7b1-d18d-f25d-40cb-c4c609dc5af8/source/512x512bb.jpg"
                  alt=""
                  className=""
                  style={{ width: "30px" }}
                />
                <small className="fw-bold fs-5">BMI Calculator</small>
              </div>
              Join us to stay fit and healthy <br /> with Fit India.
              <h4 className="d-flex my-4" style={{ cursor: "pointer" }}>
                <a
                  href="https://www.instagram.com/________.pathfinder/"
                  className="text-dark"
                >
                  <i className="me-1 fab fa-instagram instaHover"></i>
                </a>
                <a
                  href="https://ne-np.facebook.com/YogRajputt"
                  className="text-dark"
                >
                  <i className="mx-1 fab fa-facebook fbHover"></i>
                </a>
                <div href="" className="text-dark">
                  <i className="mx-1 fab fa-twitter twitterHover"></i>
                </div>
                <a
                  href="https://youtube.com/channel/UCL3NidXnFqDpHrIFl9VqTwQ"
                  className="text-dark"
                >
                  <i className="mx-1 fab fa-youtube youtubeHover"></i>
                </a>
              </h4>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="fs-4 text-danger">Quick Links</div>
              <hr style={{ width: "220px" }} className="my-1" />
              <div>
                <Link
                  to="/BMICalculator"
                  className="link-dark text-decoration-none quicklink"
                >
                  Home
                </Link>
                <br />
                <Link
                  to="/Overweight"
                  className="link-dark text-decoration-none quicklink"
                >
                  Obesity & Overweight
                </Link>
                <br />
                <Link
                  to="/Underweight"
                  className="link-dark text-decoration-none quicklink"
                >
                  Malnutritian
                </Link>
                <br />
                <Link
                  to="/Normalweight"
                  className="link-dark text-decoration-none quicklink"
                >
                  Fit & Healthy
                </Link>
                <br />
                <Link
                  to="/AboutUs"
                  className="link-dark text-decoration-none quicklink"
                >
                  About Developer
                </Link>
                <br />
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="fs-4 text-danger">Contact Us</div>
              <hr style={{ width: "220px" }} className="my-1" />
              Weoto Technologies Pvt. Ltd, <br /> 2nd Floor, Chandwadkar Park,
              <br />
              Infront of Nandan Sweets,
              <br /> College Road, Nashik-422005
              <div className="mt-2">
                Phone : <span className="quicklink">+91-9765618373</span>
                <br />
                Email :
                <span className="quicklink">contact.dev@rediffmail.com</span>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 ">
              <div className="fs-4 text-danger">References</div>
              <hr style={{ width: "220px" }} className="my-1" />
              <a href="https://www.nhp.gov.in">https://www.nhp.gov.in</a> <br />
              <a href="https://swachhindia.ndtv.com/">
                https://swachhindia.ndtv.com
              </a>{" "}
              <br />
              <a href="https://www.narayanahealth.org/blog/">
                https://www.narayanahealth.org/blog
              </a>{" "}
              <br />
              <a href="https://www.who.int/health-topics/">
                https://www.who.int/health-topics
              </a>{" "}
              <br />
              <a href="https://www.google.com/">https://www.google.com</a>{" "}
              <br />
              <a href="https://www.wikipedia.org/">
                https://www.wikipedia.org/
              </a>
            </div>
          </div>
          <hr className="mt-4 mb-1" />
          <div className="fs-6">
            copyrights@<span className="fw-bold">Yogesh Pawar </span>All Rights
            Reserved.
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
