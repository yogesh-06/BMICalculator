import React from "react";
import Man from "../Images/man.svg";
import Women from "../Images/women.svg";
const Introduction = () => {
  return (
    <>
      <div className="container py-4 bg-light" id="WhatIsBMI">
        <div className="text-center px-3 fs-4">
          <span className="fw-bold me-2">Online BMI Calculator:</span> A
          Necessary Tool For Health
        </div>
        <div className="row align-items-start my-4">
          <div className="col-md-8 col-sm-12 intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            debitis saepe voluptatum autem dolor quibusdam, consequatur
            voluptates expedita repellat repudiandae beatae animi nobis, quaerat
            exercitationem molestias dicta accusamus tempora. Quaerat
            blanditiis, esse omnis odit minus ab impedit exercitationem itaque
            consequatur? Ex sunt explicabo nihil odio obcaecati, unde,
            temporibus dolore eius officiis nostrum quod reprehenderit
            accusantium, nam molestias. Est, excepturi! Inventore sint nulla ut
            ad sunt, culpa omnis perferendis vero perspiciatis placeat odit
            accusantium minus quibusdam totam sit voluptate fuga, harum ea
            numquam eum. Error dignissimos nesciunt ullam ipsam cum quibusdam
            temporibus, alias commodi quo, omnis laborum similique. Id, corrupti
            quos nam deserunt eius voluptates earum, aspernatur aut magni
            quaerat vel consectetur. Dignissimos itaque veniam consequatur sunt,
            dolores harum natus esse maxime distinctio temporibus voluptatum
            adipisci ratione commodi. Inventore, magnam optio. Corrupti ducimus
            adipisci minus error magni deleniti nostrum unde facilis laborum
            voluptate. Veritatis dicta illo labore fugit commodi dignissimos
            ipsum!
          </div>
          <img
            className="col-md-4 col-sm-12 intro_img py-3"
            src="https://www.hdfcergo.com/images/default-source/health-insurance/online-bmi-calculator-a-necessary-tool-for-health.svg"
            alt=""
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#f3f3f3" }} className="py-4">
        <div className="text-center px-3 fs-4">
          <span className="fw-bold me-2">What Is The Idiol BMI Range:</span>
          For Men And Women
        </div>
        <div
          className="row d-flex justify-content-center my-4"
          id="WhatIsBMIRange"
        >
          <div class="card col-md-6 col-sm-12 mb-3" style={{ width: "21rem" }}>
            <img src={Man} class="card-img-top " alt="..." />
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
        <div className="text-center px-3 fs-4">
          <span className="fw-bold me-2">An Overview Of:</span>
          Body Mass Index
        </div>
        <div>
          <div className="d-inline-flex p-1 px-2 d-flex justify-content-center bg-secondary rounded-3">
            <div className="fs-6 px-3 py-1  me-2 bg-light rounded-3">
              What is BMI?
            </div>
            <div className="fs-6 px-3 py-1  bg-light rounded-3">
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
