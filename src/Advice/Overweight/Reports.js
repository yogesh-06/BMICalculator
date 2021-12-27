import React from "react";
import ObesityIndia from "../../Images/ObesityIndia.jpg";
import ObesityChart from "../../Images/ObesityChart.webp";
import ObeseChild from "../../Images/ObeseChild.webp";
import PoshanMaha from "../../Images/Obesity_GFX_2.jpg";

const Reports = () => {
  return (
    <>
      <div className="container py-4" id="WhatIsBMI">
        <div className="bg-light">
          <div className="px-3 fs-3 ">
            <span className="fw-bold me-2">Purpose : </span>
            This study estimates the
            <span className="text-danger fw-bold"> pan-Indian </span>
            prevalence of obesity, stratified across nonmodifiable (age and
            gender) and modifiable (education and physical activity levels)
            factors, and across zones and urban/rural.
          </div>
        </div>
        <div className="px-3 mt-3 fs-3">
          <span className="fw-bold me-2">Risk Factor</span>
        </div>
        <div className="row align-items-start my-2">
          <div className="col-md-8 col-sm-12 intro">
            In <span className="text-danger fw-bold"> India</span>, more than
            <span className="fw-bold"> 135 million </span>
            individuals were affected by obesity. ... According to
            <span className="fw-bold"> ICMR-INDIAB </span>
            study 2020, prevalence rate of obesity and central obesity are
            varies from 11.8% to 31.3% and 16.9%-36.3% respectively. In India,
            abdominal obesity is one of the major risk factors for
            cardiovascular disease (CVDs). <br />
            According to<span className="fw-bold"> ICMR-INDIAB </span> study
            2020, prevalence rate of obesity and central obesity are varies from
            11.8% to 31.3% and 16.9%-36.3% respectively. <br /> In
            <span className="text-danger fw-bold"> India</span>, abdominal
            obesity is one of the major risk factors for cardiovascular disease
            (CVDs).
            <img className="w-100 pt-3 pe-3" src={ObesityIndia} alt="" />
          </div>
          <img
            className="col-md-4 col-sm-12 intro_img py-1"
            src={ObesityChart}
            alt=""
          />
        </div>
      </div>
      <div className="bg-light">
        <div className="container py-4" id="WhatIsBMI">
          <div className="px-3 mt-3 fs-3">
            <span className="fw-bold me-2">Child Obesity</span>
          </div>
          <div className="row align-items-start my-2">
            <div className="col-md-8 col-sm-12 intro">
              Childhood obesity is now an epidemic in
              <span className="text-danger fw-bold"> India</span>. With 14.4
              million obese children,
              <span className="text-danger fw-bold"> India </span>has the
              second-highest number of obese children in the world, next to
              China. The prevalence of overweight and obesity in children is
              15%. In private schools catering to upper-income families, the
              incidence has shot up to 35-40%, indicating a worrying upward
              trend. <br />
              <span className="fw-bold">
                Childhood obesity has serious health implications.
              </span>
              Obese children are at increased risk of hypertension,
              osteoarthritis, high cholesterol and triglycerides, Type 2
              diabetes, coronary heart disease, stroke, gallbladder disease,
              respiratory problems, emotional disturbances, and some cancers.
              Two in three obese children will remain obese as adults and at
              risk for adult lifestyle diseases. India is projected to become
              the diabetes capital in the world
            </div>
            <img
              className="col-md-4 col-sm-12 intro_img py-1"
              src={ObeseChild}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container py-4" id="WhatIsBMI">
        <div className="px-3 mt-3 fs-3">
          <span className="fw-bold me-2">
            How India Has Been Dealing With The Problem Of Obesity
          </span>
        </div>
        <div className="row align-items-start my-2">
          <div className="col-md-8 col-sm-12 intro">
            <span className="text-danger fw-bold"> India’s</span> flagship
            nutrition programme –{" "}
            <span className=" fw-bold"> Poshan Abhiyaan,</span> which was
            launched in 2018
            <br />
            <br />
            has also identified obesity as a concerning factor in India. The
            third annual report of Poshan Abhiyan said that the nation needs to
            mobilize solid efforts to address the emerging and cross-cutting
            challenges of urbanization and Overweight-Obesity (O-O). <br />
            <br />
            Along with Poshan Abhiyan, the government of India under Food Safety
            and Standards Authority of India also launched ‘Eat Right’ programme
            in the year 2017. The Eat Right India is aligned to the National
            Health Policy 2017 with its focus on preventive and promotive
            healthcare and flagship programmes like Ayushman Bharat, Poshan
            Abhiyaan, Anemia Mukt Bharat and Swacch Bharat Mission. The campaign
            focusses on making a social and behavioural change around food
            safety and nutrition at home, school, workplace and on-the-go.
            Another focus is on reduction of high fat, sugar and salt foods in
            the diet; and Food Fortification, focused on promoting five staple
            foods-wheat flour, rice, oil, milk and salt that are added with key
            vitamins and minerals to improve their nutritional content.
          </div>
          <img
            className="col-md-4 col-sm-12 intro_img py-2"
            src={PoshanMaha}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Reports;
