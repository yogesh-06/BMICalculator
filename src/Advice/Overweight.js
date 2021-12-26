import React from "react";
import Navbar from "../Components/Navbar";
import Slider1 from "../Images/Obesity-The-biggest-threat-to-India.jpg";
import Slider2 from "../Images/OverweightLady.jpg";
import Slider3 from "../Images/Child-Obesity.jpg";
const Overweight = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="d-flex justify-content-center">
              <img className="container pb-3 pt-1" src={Slider1} alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex justify-content-center">
              <img className="container pb-3 pt-1" src={Slider2} alt="" />
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex justify-content-center">
              <img className="container pb-3 pt-1" src={Slider3} alt="" />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <div className="fs-3 text-decoration-underline text-danger">
          About Overweight & Obesity :
        </div>
        <span className=" fs-5 small">
          Obesity is a serious chronic disease, and the prevalence of obesity
          continues to increase in the
          <span className="text-danger fw-bold"> India</span>.
        </span>
      </div>
      {/* <div className="bg-light">
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
    </>
  );
};
export default Overweight;
