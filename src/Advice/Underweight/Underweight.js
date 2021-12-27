import React from "react";
import Slider1 from "../../Images/Malnutrition-challenge.jpg";
import Slider2 from "../../Images/Underweight-childres.jpg";
import Slider3 from "../../Images/Underweight-child.jpg";
const Underweight = () => {
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
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <div className="fs-3 text-decoration-underline text-danger">
            What Is Under-Weight?:
          </div>
          <span className=" fs-5 small">
            What is a underweight person? An underweight person is a person
            whose body weight is considered too low to be healthy. The same
            concept applies to animals.
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
    </>
  );
};
export default Underweight;
