import React from "react";
import Man from "../Images/man.svg";
import Women from "../Images/women.svg";
const Introduction = () => {
  return (
    <>
      <div className="container py-4" id="WhatIsBMI">
        <div className="text-center px-3 fs-3">
          <span className="fw-bold me-2">Online BMI Calculator:</span> A
          Necessary Tool For Health
        </div>
        <div className="row align-items-start my-4">
          <div className="col-md-8 col-sm-12 intro">
            The last one year has taught us how important it is to be healthy.
            The coronavirus pandemic was a rude shock for everyone and it
            reminded everyone that it is extremely important to be healthy.
            People need to follow a well-balanced diet as well as work out. To
            follow a healthy routine, one needs to know their body type. Every
            person has a different body type and hence they cannot be asked to
            follow the same diet or exercise schedule. <br /> Moreover, it is
            not enough to know just your bodyweight; one has to be aware of
            their body mass index (BMI). The online Body Mass Index (BMI)
            calculator is a perfect device to determine that. The BMI calculator
            measures how much body mass you have according to your height and
            weight. Body mass refers not only to the fat within your body but
            also within muscles and bones. It is calculated by considering your
            weight and dividing it by the square of your height. This is a
            useful and easy tool for getting to know different weight categories
            that may lead to health problems.
          </div>
          <img
            className="col-md-4 col-sm-12 intro_img py-3"
            src="https://www.hdfcergo.com/images/default-source/health-insurance/online-bmi-calculator-a-necessary-tool-for-health.svg"
            alt=""
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#f3f3f3" }} className="py-4">
        <div className="text-center px-3 fs-3">
          <span className="fw-bold me-2">What Is The Idiol BMI Range:</span>
          For Men And Women
        </div>
        <div
          className="row d-flex justify-content-center my-4"
          id="WhatIsBMIRange"
        >
          <div class="card col-md-6 col-sm-12 mb-3" style={{ width: "21rem" }}>
            <img src={Man} class="card-img-top container" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">BMI For Men</h5>
              <p class="card-text">
                An ideal BMI range which is considered normal is supposedly
                between 18.5 to 24.9 kg/m2. BMI below18.5 (approx) is considered
                underweight and anything between 24.9 to 30 (approx) is
                considered overweight.
              </p>
            </div>
          </div>
          <div class="card col-md-6 col-sm-12 mb-3" style={{ width: "21rem" }}>
            <img src={Women} class="card-img-top container" alt="..." />
            <div class="card-body">
              <h5 class="card-title text-center">BMI For Women</h5>
              <p class="card-text">
                Some studies suggest that the average BMI value for women is
                slightly lower than men. While some studies have suggested that
                higher BMI cut offs for women like 32, 33 are normal. Therefore,
                it is suitable to follow the BMI range that’s common for both.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "light" }} className="py-4">
        <div className="text-center px-3 fs-3">
          <span className="fw-bold me-2">An Overview Of:</span>
          Body Mass Index
        </div>
        <div className="text-center my-3">
          <div
            className="d-inline-flex text-muted fw-bold mute p-1 px-2 d-flex justify-content-center rounded-3"
            style={{ backgroundColor: "lightgray" }}
          >
            <div className="fs-6 px-3 py-1  me-2 rounded-3">What is BMI?</div>
            <div className="fs-6 px-3 py-1  rounded-3 mute">
              What is one calculate BMI?
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center my-4">
          <div class="card col-md-6 col-sm-12 mb-3" style={{ width: "21rem" }}>
            <div class="card-body">
              <h5 class="card-title text-center">BMI For Men</h5>
              <p class="card-text">
                An ideal BMI range which is considered normal is supposedly
                between 18.5 to 24.9 kg/m2. BMI below18.5 (approx) is considered
                underweight and anything between 24.9 to 30 (approx) is
                considered overweight.
              </p>
            </div>
          </div>
          <div class="card col-md-6 col-sm-12" style={{ width: "21rem" }}>
            <div class="card-body">
              <h5 class="card-title text-center">BMI For Women</h5>
              <p class="card-text">
                Some studies suggest that the average BMI value for women is
                slightly lower than men. While some studies have suggested that
                higher BMI cut offs for women like 32, 33 are normal. Therefore,
                it is suitable to follow the BMI range that’s common for both.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Introduction;
