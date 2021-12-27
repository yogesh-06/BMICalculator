import React from "react";
import Slider1 from "./ObeseImages/Slider1.jpg";
const Solutions = () => {
  return (
    <>
      <div className="container py-4" id="WhatIsBMI">
        <div className="bg-light mb-4 border-bottom">
          <div className="px-3 fs-3 ">
            <span className="fw-bold me-2">Survay Say's : </span>
            Recommendations for medical management of
            <span className="text-danger fw-bold"> Asian Indians </span>
            with obesity. Advise a hypo-caloric individualized diet. Advise at
            least 60 min of physical activity (aerobic and resistance exercises)
            daily or 300 min of activity per week. GLP-1 agonists in obese
            diabetic individuals.
          </div>
        </div>
        <div className="px-3 fs-3">
          <span className="fw-bold me-2">
            Tips to Lose 10 kilograms or More:
          </span>
        </div>
        <div
          id="carouselExampleIndicators"
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
          <div className="carousel-inner my-3">
            <div className="carousel-item active ">
              <div className="row d-flex">
                <img
                  src={Slider1}
                  className="d-block col-md-6 col-sm-12"
                  alt="..."
                />
                <div className="col-md-6 col-sm-12">
                  <div className="fs-3 text-danger">
                    It's All About Planning
                  </div>
                  When you have a lot of weight to lose, it means playing the
                  long game. And during that time, you'll face challenges.
                  Weight loss experts and people who have done it offer you
                  their ideas to cut calories, fight the "hangry," make exercise
                  easier, stay on track, and more. Some are tried-and-true, and
                  others may surprise you.
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex">
                <img
                  src={Slider1}
                  className="d-block col-md-6 col-sm-12"
                  alt="..."
                />
                <div className="col-md-6 col-sm-12">
                  <div className="fs-3 text-warning">
                    It's All About Planning
                  </div>
                  When you have a lot of weight to lose, it means playing the
                  long game. And during that time, you'll face challenges.
                  Weight loss experts and people who have done it offer you
                  their ideas to cut calories, fight the "hangry," make exercise
                  easier, stay on track, and more. Some are tried-and-true, and
                  others may surprise you.
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row d-flex">
                <img
                  src={Slider1}
                  className="d-block col-md-6 col-sm-12"
                  alt="..."
                />
                <div className="col-md-6 col-sm-12">
                  <div className="fs-3 text-primary">
                    It's All About Planning
                  </div>
                  When you have a lot of weight to lose, it means playing the
                  long game. And during that time, you'll face challenges.
                  Weight loss experts and people who have done it offer you
                  their ideas to cut calories, fight the "hangry," make exercise
                  easier, stay on track, and more. Some are tried-and-true, and
                  others may surprise you.
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Solutions;
