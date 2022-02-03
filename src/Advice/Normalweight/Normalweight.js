import React from "react";
import Slider1 from "../../Images/FitnessSlider1.jpg";
import Slider2 from "../../Images/FitnessSlider2.jpg";
import Slider3 from "../../Images/FitnessSlider3.jpg";
import Fitness from "./Fitness";
import IndianFood from "./HealthImages/IndianFood.jpg";
import HealthyFood from "./HealthyFood";
const Normalweight = () => {
  return (
    <>
      <>
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
                <img
                  className="container pb-3 pt-1 fitnessSlider"
                  src={Slider1}
                  alt=""
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img
                  className="container pb-3 pt-1 fitnessSlider"
                  src={Slider2}
                  alt=""
                />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-center">
                <img
                  className="container pb-3 pt-1 fitnessSlider"
                  src={Slider3}
                  alt=""
                />
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
        <div className="container mb-2">
          <div className="fs-3 text-decoration-underline text-danger">
            What is healthy living? :
          </div>
          <span className=" fs-5 small">
            "Healthy living" to most people means both physical and mental
            health are in balance or functioning well together in a person. In
            many instances, physical and mental health are closely linked, so
            that a change (good or bad) in one directly affects the other.
            Consequently, some of the tips will include suggestions for
            emotional and mental "healthy living.
          </span>
        </div>
        <div className="scroll">
          <div className="container py-2" id="WhatIsBMI">
            <div className="px-3 mt-3 fs-3">
              <span className="fw-bold me-2">
                Essential Indian Foods In Diet:
              </span>
            </div>
            <div className="row align-items-start my-2">
              {/* <img
                className="col-md-4 col-sm-12 intro_img py-1"
                src={IndianFood}
                alt=""
              /> */}
              <div className="col-md-12 col-sm-12 intro mt-1">
                It is difficult to design the perfect healthy
                <span className="text-danger fw-bold"> Indian diet.</span> There
                is so much variation in climate and availability that no one
                diet plan can suit everyone. This problem is compounded by the
                fact that health conditions may mean that you are not able to
                eat some foods. Furthermore, a lot of options are not available
                to vegetarians.
                <br /> In light of these factors, we have prepared a list of 12
                common Indian foods that must be a part of every diet. Note that
                if you suffer from any health condition, always ask your doctor
                about what you can and cannot include from this list Eat three
                healthy meals a day (breakfast, lunch, and dinner); it is
                important to remember that dinner does not have to be the
                largest meal.
              </div>
              <HealthyFood />
            </div>
          </div>
          <div className="container py-2" id="WhatIsBMI">
            <div className="px-3 mt-3 fs-3">
              <span className="fw-bold me-2">
                10 Best Exercies for Everyone:
              </span>
            </div>
            <div className="row align-items-start my-2">
              {/* <img
                className="col-md-4 col-sm-12 intro_img py-1"
                src={IndianFood}
                alt=""
              /> */}
              <div className="col-md-12 col-sm-12 intro mt-1">
                We know daily exercise is good for optimizing health. But with
                so many options and limitless information available, it’s easy
                to get overwhelmed with what works. But not to worry. We’ve got
                your back (and body)! <br /> Check out the 10 exercises you can
                do for ultimate fitness. Combine them into a routine for a
                workout that’s simple but powerful and sure to keep you in shape
                for the rest of your life. After 30 days — although you can also
                do them just twice a week — you should see improvements in your
                muscular strength, endurance, and balance. <br /> Plus, notice a
                difference in how your clothes fit — winning!
              </div>
              <Fitness />
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default Normalweight;
