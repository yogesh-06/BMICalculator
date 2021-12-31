import React from "react";
import Man from "../Images/man.svg";
import Women from "../Images/women.svg";
import BMImeasure from "../Images/BMI-measure.png";
const Introduction = ({ cardRow, setCardRow }) => {
  return (
    <>
      <div className="scroll">
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
              calculator is a perfect device to determine that. The BMI
              calculator measures how much body mass you have according to your
              height and weight. Body mass refers not only to the fat within
              your body but also within muscles and bones. It is calculated by
              considering your weight and dividing it by the square of your
              height. This is a useful and easy tool for getting to know
              different weight categories that may lead to health problems.
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
            <div
              className="card col-md-6 col-sm-12 mb-3 me-3"
              style={{ width: "21rem" }}
            >
              <img src={Man} className="card-img-top container" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">BMI For Men</h5>
                <p className="card-text">
                  An ideal BMI range which is considered normal is supposedly
                  between 18.5 to 24.9 kg/m2. BMI below18.5 (approx) is
                  considered underweight and anything between 24.9 to 30
                  (approx) is considered overweight.
                </p>
              </div>
            </div>
            <div
              className="card col-md-6 col-sm-12 mb-3 "
              style={{ width: "21rem" }}
            >
              <img src={Women} className="card-img-top container" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">BMI For Women</h5>
                <p className="card-text">
                  Some studies suggest that the average BMI value for women is
                  slightly lower than men. While some studies have suggested
                  that higher BMI cut offs for women like 32, 33 are normal.
                  Therefore, it is suitable to follow the BMI range that’s
                  common for both.
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
              className="d-inline-flex text-muted fw-bold mute p-1 mt-3 px-2 d-flex justify-content-center rounded-3"
              style={{ backgroundColor: "lightgray" }}
            >
              <div
                className={
                  cardRow
                    ? "px-3 py-1 my-1 text-danger me-1 rounded-3 bg-light"
                    : "px-3 py-1 my-1 me-1 rounded-3 mute"
                }
                onClick={() => setCardRow(true)}
              >
                What is BMI?
              </div>
              <div
                className={
                  !cardRow
                    ? " px-3 py-1 my-1 text-danger  rounded-3 bg-light"
                    : " px-3 py-1 my-1  rounded-3 mute"
                }
                onClick={() => setCardRow(false)}
              >
                What is one calculate BMI?
              </div>
            </div>
          </div>
          {cardRow ? (
            <div className="row d-flex justify-content-evenly ">
              <div
                className="card col-md-6 col-sm-12 shadow mt-3"
                style={{ width: "21rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://www.hdfcergo.com/images/default-source/health-insurance/bmi-definition.svg?sfvrsn=7f7a28dc_2"
                      alt=""
                    />
                    <span className="fs-4 ms-2"> BMI Definition</span>
                  </h5>
                  <p className="card-text">
                    Body Mass Index (BMI) is extensively used as an indicator of
                    body fat content. Knowing only the weight is not adequate to
                    determine if a person is on a healthy weight range.
                  </p>
                </div>
              </div>
              <div
                className="card col-md-6 col-sm-12 shadow mt-3"
                style={{ width: "21rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://www.hdfcergo.com/images/default-source/health-insurance/better-health-with-bmi.svg?sfvrsn=212efb25_2"
                      alt=""
                    />
                    <span className="fs-4 ms-2"> Better Health </span>
                  </h5>
                  <p className="card-text">
                    Suppose a tall and lean person might weigh more than a short
                    and chubby individual. However, the former may enjoy better
                    health as long as their weight is suitable for their height.
                  </p>
                </div>
              </div>
              <div
                className="card col-md-6 col-sm-12 shadow mt-3"
                style={{ width: "21rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://www.hdfcergo.com/images/default-source/health-insurance/height-and-weight-correlation.svg"
                      alt=""
                    />
                    <span className="fs-4 ms-2"> H-W Correlation</span>
                  </h5>
                  <p className="card-text">
                    Suppose a tall and lean person might weigh more than a short
                    and chubby individual. However, the former may enjoy better
                    health as long as their weight is suitable for their height.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row d-flex justify-content-evenly ">
              <div
                className="card col-md-6 col-sm-12 shadow mt-3"
                style={{ width: "21rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://www.hdfcergo.com/images/default-source/health-insurance/easy-calculation.svg"
                      alt=""
                    />
                    <span className="fs-4 ms-2">Easy Calculation</span>
                  </h5>
                  <p className="card-text">
                    BMI calculation is fairly easy. It can be done using a
                    handheld calculator or with the help of online on websites
                    and apps with body mass index calculators.
                  </p>
                </div>
              </div>
              <div
                className="card col-md-6 col-sm-12 shadow mt-3"
                style={{ width: "21rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://www.hdfcergo.com/images/default-source/health-insurance/quick-result.svg"
                      alt=""
                    />
                    <span className="fs-4 ms-2"> Quick Result</span>
                  </h5>
                  <p className="card-text">
                    To get the result, simply divide your weight in kilograms by
                    the square of your height in metres. Or fill your height and
                    weight in an app or website and the BMI results will flash
                    on your screen.
                  </p>
                </div>
              </div>
              <div
                className="card col-md-6 col-sm-12 shadow mt-3"
                style={{ width: "21rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <img
                      src="https://www.hdfcergo.com/images/default-source/health-insurance/calculation-formula.svg"
                      alt=""
                    />
                    <span className="fs-4 ms-2"> Formula</span>
                  </h5>
                  <p className="card-text">
                    BMI can be calculated with the help of two
                    methods:International System of Units (SI) - BMI = weight
                    (kg) ÷ (height (m))^2Imperial System - BMI = weight (lb) ÷
                    (height (inches))^ 2 × 703.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="bg-light my-4">
          <div className="py-4" id="WhatIsBMI">
            <div className=" text-center px-3 fs-3">
              <span className="fw-bold me-2">Health risks:</span> for overweight
              and underweight people
            </div>
            <div className="row d-flex justify-content-evenly my-4 mx-2">
              <div
                className="shadow border-bottom border-start border-end col-md-6 col-sm-12 mb-3"
                style={{ width: "35rem" }}
              >
                <h5 className="mt-3">
                  What Are The Health Risks For Overweight People
                </h5>
                <small className="card-text text-muted my-1">
                  An ideal BMI range which is considered normal is supposedly
                  between 18.5 to 24.9 kg/m2. BMI below18.5 (approx) is
                  considered underweight and anything between 24.9 to 30
                  (approx) is considered overweight:
                </small>
                <div className="small my-4 d-flex justify-content-between">
                  <ul className="">
                    <li className="healthRisks">Type 2 diabetes</li>
                    <li className="healthRisks">Heart conditions</li>
                    <li className="healthRisks">High triglycerides</li>
                    <li className="healthRisks">Chances of stroke</li>
                  </ul>
                  <ul className="">
                    <li className="healthRisks">High blood pressure</li>
                    <li className="healthRisks">
                      Gall bladder-related complications
                    </li>
                    <li className="healthRisks">
                      Clinical depression and other mental health issues
                    </li>
                    <li className="healthRisks">
                      Polycystic ovarian disease in women which may <br />
                      lead to reduced fertility and other menstrual
                      irregularities
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="shadow border-bottom border-start border-end col-md-6 col-sm-12 mb-3"
                style={{ width: "35rem" }}
              >
                <h5 className="mt-3">
                  What Are The Health Risks For Underweight People
                </h5>
                <small className="card-text text-muted my-1">
                  Having a low BMI is also associated with health risks, such as
                  the ones listed below:
                </small>
                <div className="small my-4 d-flex justify-content-between">
                  <ul className="">
                    <li className="healthRisks">Vitamin deficiencies</li>
                    <li className="healthRisks">Low immunity</li>
                    <li className="healthRisks">Osteoporosis</li>
                  </ul>
                  <ul className="">
                    <li className="healthRisks">Malnutrition</li>
                    <li className="healthRisks">Hormonal imbalances</li>
                    <li className="healthRisks">
                      Disruptions in women’s menstrual cycle causing
                      complications in conception
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text-center px-3 fs-3 py-4">
            How Reliable Is <span className="fw-bold me-2">BMI Measure:</span>
          </div>
          <div className="row align-items-start">
            <div className="col-md-8 col-sm-12 intro">
              BMI as a single measure may not be the perfect measure of health.
              However, it is still a useful starting tool which can be used to
              determine important conditions that can more likely affect a
              person who is overweight or obese. It is important that a person
              is aware about their BMI. Many medical professionals also use it
              as a basis for health checkups. <br /> <br />
              Health insurance companies also use it as a measure to determine
              the premium rates. But more importantly it is an indicator for you
              to maintain a healthy lifestyle. The Covid-19 pandemic has made us
              realise how vital it is to be fit and healthy. Hence, knowing your
              BMI is just a step forward to being aware of your health. <br />{" "}
              <br />
              BMI also helps you to take necessary steps to improve your health.
              If you are overweight, you can take measures to reduce your weight
              by exercising, following a proper diet etc. Similarly, if you are
              underweight according to BMI, you can consult your doctor about
              how to increase your weight following a healthy protocol. Along
              with BMI, one needs to understand body composition. It describes
              the amount of fat, bone, water, and muscle in the body. So, to
              attain a healthy weight range, one has to aware of body mass
              composition as well.
            </div>
            <img
              className="col-md-4 col-sm-12 intro_img pb-3 pt-1"
              src={BMImeasure}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Introduction;
