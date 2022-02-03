import React from "react";
import Contact from "../Images/AboutUs.jpg";
import Developer from "../Images/Developer1.jpg";
const AboutUs = () => {
  return (
    <>
      <img src={Contact} className="w-100" alt="" />

      <div
        className="row align-items-center d-flex justify-content-center mx-3 rounded-3 mt-5"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <img
          className="main col-md-8 col-sm-12 shadow-lg p-0 me-2 mb-3"
          src={Developer}
          alt=""
          style={{ borderRadius: "20px" }}
        />

        <div className="col-md-4 col-sm-12 ms-2">
          <h1 className="fs-1 text-danger m-0">
            Hello World! <span className="fs-4 text-dark">I'm Yogesh</span>
            <hr className="mt-1" />
          </h1>
          <span style={{ fontFamily: "ubuntu" }}>
            I am Front-End Web Developer. I’m working as web developer. i have
            developed many website and also provided my services to college
            students by getting their projects ready ASAP as a freelancer I have
            been part of some very good web design projects. I'm also learning
            Back-End Development and looking forward to be a Full Stack Web
            Developer. <br />
          </span>
        </div>
      </div>
      <div className="my-5 pt-3 ">
        <div className="container">
          <div className="fs-2"> My Skill Sets:</div>
          <div className="row d-flex justify-content-evenly mt-2 mx-1">
            <div className="card col-md-5 col-sm-12 shadow  mb-4 skillCard">
              <div className="card-body">
                <h5 className="card-title my-2">
                  <div className="my-2">
                    <span className="text-danger bg-light rounded-circle p-3 ">
                      <i class="fab fa-html5"></i>
                    </span>
                    <span className="fs-4 ms-2"> HTML-5</span>
                  </div>
                </h5>
                <p className="card-text">
                  Standard markup language for documents designed to be
                  displayed in a web browser.
                </p>
              </div>
            </div>
            <div className="card col-md-5 col-sm-12 shadow  mb-4 skillCard">
              <div className="card-body">
                <h5 className="card-title my-2">
                  <div className="my-2">
                    <span className="text-primary bg-light rounded-circle p-3 ">
                      <i class="fab fa-css3-alt"></i>
                    </span>
                    <span className="fs-4 ms-2"> CSS-3 </span>
                  </div>
                </h5>
                <p className="card-text">
                  Describing the presentation of a document written in a markup
                  language such as HTML.
                </p>
              </div>
            </div>
            <div className="card col-md-5 col-sm-12 shadow  mb-4 skillCard">
              <div className="card-body">
                <h5 className="card-title my-2">
                  <div className="my-2">
                    <span className="text-warning bg-light rounded-circle p-3 ">
                      <i class="fab fa-js-square"></i>
                    </span>

                    <span className="fs-4 ms-2"> JAVASCRIPT-ES6</span>
                  </div>
                </h5>
                <p className="card-text">
                  Over 97% of websites use JavaScript on the client side for web
                  page behavior.
                </p>
              </div>
            </div>
            <div className="card col-md-5 col-sm-12 shadow  mb-4 skillCard">
              <div className="card-body">
                <h5 className="card-title my-2">
                  <div className="my-2">
                    <span className="text-primary bg-light rounded-circle p-3 ">
                      <i class="fab fa-react"></i>
                    </span>

                    <span className="fs-4 ms-2"> REACT-JS</span>
                  </div>
                </h5>
                <p className="card-text">
                  Simplify the development process and foster a comfortable user
                  experience by using React.js
                </p>
              </div>
            </div>
            <div className="card col-md-5 col-sm-12 shadow  mb-4 skillCard">
              <div className="card-body">
                <h5 className="card-title ">
                  <div className="my-2">
                    <span className="text-info bg-light rounded-circle p-3 ">
                      <i class="fab fa-bootstrap"></i>{" "}
                    </span>

                    <span className="fs-4 ms-2"> BOOTSTRAP-5</span>
                  </div>
                </h5>
                <p className="card-text">
                  Use for responsive, mobile-first front-end web development.
                  Ready to use typography, forms, buttons, navigation, and other
                  interface components.
                </p>
              </div>
            </div>
            <div className="card col-md-5 col-sm-12 shadow  mb-4 skillCard">
              <div className="card-body">
                <h5 className="card-title">
                  <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt=""
                    className="bg-light rounded-circle"
                  />

                  <span className="fs-4 ms-2"> TAILWIND</span>
                </h5>
                <p className="card-text">
                  Set of utility classes which can be used to create you unique
                  and custom design with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
