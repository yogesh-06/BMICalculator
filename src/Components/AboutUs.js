import React from "react";
import Contact from "../Images/AboutUs.jpg";
import Developer from "../Images/Developer.jpg";
const AboutUs = () => {
  return (
    <>
      <img src={Contact} className="w-100" alt="" />
      {/* <div className="container d-flex justify-content-center">
        <img
          className="p-0 "
          style={{
            borderRadius: "25px",
          }}
          src={Developer}
          alt=""
        />
        <div className="ms-3">
          <h1 className="fs-1 text-danger">
            Hello World! <span className="fs-4 text-dark">I'm Yogesh</span>
          </h1>
          <span style={{ fontFamily: "ubuntu" }}>
            I am Front-End Web Developer. I’m working as web developer.i have
            developed many website and also provided my services to college
            students by getting their projects ready ASAP as a freelancer I have
            been part of some very good web design projects. <br /> My Skill Set
            : HTML5, CSS3, JavaScript. I'm also learning Back-End Development
            and looking forward to be a Full Stack Web Developer.
          </span>
        </div>
      </div> */}
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
            been part of some very good web design projects. <br /> My Skill Set
            : HTML5, CSS3, JavaScript. I'm also learning Back-End Development
            and looking forward to be a Full Stack Web Developer.
          </span>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
