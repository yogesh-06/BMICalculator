import React from "react";
import Slider1 from "../../Images/Obesity-The-biggest-threat-to-India.jpg";
import Slider2 from "../../Images/OverweightLady.jpg";
import Slider3 from "../../Images/Child-Obesity.jpg";
import Overview from "./Overview";
import Reports from "./Reports";
import Preventions from "./Preventions";
import Solutions from "./Solutions";
const Overweight = () => {
  return (
    <div className="scroll">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-center">
              <img className="container pb-3 pt-1" src={Slider1} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img className="container pb-3 pt-1" src={Slider2} alt="" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-center">
              <img className="container pb-3 pt-1" src={Slider3} alt="" />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*   <div className="container">
        <div className="fs-3 text-decoration-underline text-danger">
          About Overweight & Obesity :
        </div>
        <span className=" fs-5 small">
          Obesity is a serious chronic disease, and the prevalence of obesity
          continues to increase in the
          <span className="text-danger fw-bold"> India</span>.
        </span>
      </div>
      <div className="bg-light">
        <div className="container">
          <div className="my-2">
            <div className="fs-3 text-decoration-underline text-danger">
              Strategies to Prevent & Manage Obesity :
            </div>
            <span className=" fs-5 small">
              There is no single or simple solution to the obesity epidemic.
              It’s a complex problem and there has to be a multifaceted
              approach. Policy makers, state and local organizations, business
              and community leaders, school, childcare and healthcare
              professionals, and individuals must work together to create an
              environment that supports a healthy lifestyle.
            </span>
          </div>
          <div className="my-2">
            <div className="fs-3 text-decoration-underline text-danger">
              Childhood Overweight & Obesity :
            </div>
            <span className=" fs-5 small">
              Childhood obesity is a serious health problem in the
              <span className="text-danger fw-bold"> India</span>. 1 in 5
              children and adolescents in the US have obesity. Some groups of
              children are more affected than others, but all children are at
              risk of gaining weight that is higher than what is considered
              healthy.
            </span>
          </div>
        </div>
      </div> */}
      <nav
        className="py-1"
        style={{ position: "sticky", top: "56px", backgroundColor: "white" }}
      >
        <div className="nav nav-tabs ps-2" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Overview
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Reports
          </button>
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Preventions
          </button>
          <button
            className="nav-link"
            id="nav-solution-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-solution"
            type="button"
            role="tab"
            aria-controls="nav-solution"
            aria-selected="false"
          >
            Solutions
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <Overview />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <Reports />
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <Preventions />
        </div>
        <div
          className="tab-pane fade"
          id="nav-solution"
          role="tabpanel"
          aria-labelledby="nav-solution-tab"
        >
          <Solutions />
        </div>
      </div>
    </div>
  );
};
export default Overweight;
