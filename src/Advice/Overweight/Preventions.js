import React from "react";
import ObesityPrevention from "../../Images/ObesityPrevention.jpg";
import PreventionTips from "../../Images/PreventionTips.jpg";
import ObesityFigure from "../../Images/ObesityFigure.png";
const Preventions = () => {
  return (
    <>
      <div className="scroll">
        <div className="container py-4" id="WhatIsBMI">
          <div className="bg-light">
            <div className="px-3 fs-3 ">
              <span className="fw-bold me-2">Prevention : </span>
              People should engage in adequate levels of physical activity (60
              minutes a day for children and 150 minutes spread through the week
              for adults). At least 30 minutes of regular, moderate-intensity
              physical activity on most days reduces the risk of obesity and
              co-morbidities
            </div>
          </div>
          <div className="px-3 mt-3 fs-3">
            <span className="fw-bold me-2">Primary Prevention</span>
          </div>
          <div className="row align-items-start my-2">
            <div className="col-md-8 col-sm-12 intro">
              This is observed that increase in the prevalence of obesity is
              largely due to the obesogenic environment rather than medical and
              genetic problems in the individuals. Therefore prevention of
              overweight and obesity should aim creating environments that
              encourage behaviuoral changes in terms of diet and physical
              activity. <br />
              These efforts must not only focus on the prevention of obesity in
              those who have not yet become obese (primary prevention), but also
              on prevention of further weight gain and promotion of weight loss
              in those who are already obese before they develop the
              complications of obesity (secondary prevention). <br />{" "}
              Breastfeeding has been suggested as a potential protective factor
              against weight gain in childhood and this is important because
              overweight children and adolescents are at risk of becoming
              overweight adults.
              <img className="w-100 pt-2 pe-3" src={PreventionTips} alt="" />
            </div>
            <img
              className="col-md-4 col-sm-12 intro_img py-2"
              src={ObesityPrevention}
              alt=""
            />
          </div>
        </div>
        <div className="bg-light">
          <div className="container py-4" id="WhatIsBMI">
            <div className="px-3 mt-3 fs-3">
              <span className="fw-bold me-2">
                At individual level, people can follow:
              </span>
            </div>
            <div className="row align-items-start my-2">
              <div className="col-md-8 intro">
                <div className="">
                  <span className="fw-bold me-2">
                    Eating a healthy diet can help in preventing obesity- :
                  </span>
                  <div class="small my-2 d-flex justify-content-between">
                    <ul class="">
                      <li class="healthRisks">
                        Limit total fat intake and shift fat consumption away
                        from saturated fats to unsaturated fats and elimination
                        of trans fats.
                      </li>
                      <li class="healthRisks">
                        Increase consumption of fruits, vegetables, pulses,
                        whole grains, legumes and nuts.
                      </li>
                      <li class="healthRisks">
                        Limit intake of sugar and salt.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <span className="fw-bold me-2">
                    Regular physical activity helps maintain a healthy weight- :
                  </span>
                  People should engage in adequate levels of physical activity
                  (60 minutes a day for children and 150 minutes spread through
                  the week for adults). At least 30 minutes of regular,
                  moderate-intensity physical activity on most days reduces the
                  risk of obesity and co-morbidities.
                  <div class="small my-2 d-flex justify-content-between">
                    <ul class="">
                      <li class="healthRisks">
                        reducing the fat, sugar and salt content of processed
                        foods.
                      </li>
                      <li class="healthRisks">
                        ensuring that healthy and nutritious choices are
                        available and affordable to all consumers.
                      </li>
                      <li class="healthRisks">
                        restricting marketing of foods high in sugars, salt and
                        fats, especially those foods aimed at children and
                        teenagers.
                      </li>
                      <li class="healthRisks">
                        ensuring the availability of healthy food choices and
                        supporting regular physical activity practice in the
                        workplace.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <img
                className="col-md-4 col-sm-12 intro_img py-2"
                src={ObesityFigure}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Preventions;
