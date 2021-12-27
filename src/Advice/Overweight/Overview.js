import React from "react";
import ObeseCouple from "../../Images/obesity-couple-obese_iStock-removebg-preview.png";
import ObesityStress from "../../Images/ObesityStress.jpg";
import ObesityCauses from "../../Images/CausesOfObesity.jpg";
const Overview = () => {
  return (
    <>
      <div className="container py-4" id="WhatIsBMI">
        <div className="px-3 fs-3">
          <span className="fw-bold me-2">Overview</span>
        </div>
        <div className="row align-items-center my-2">
          <div className="col-md-8 col-sm-12 intro">
            Obesity in India has reached epidemic proportions in the 21st
            century, with morbid obesity affecting 5% of the country's
            population.[1] India is following a trend of other developing
            countries that are steadily becoming more obese. <br />
            Unhealthy, processed food has become much more accessible following
            India's continued integration in global food markets. This, combined
            with rising middle class incomes, is increasing the average caloric
            intake per individual among middle class and high income
            households.[2] <br /> Obesity is a major risk factor for
            cardiovascular disease, and NGOs such as the Indian Heart
            Association have been raising awareness about this issue.
          </div>
          <img
            className="col-md-4 col-sm-12 intro_img py-3"
            src={ObeseCouple}
            alt=""
          />
        </div>
      </div>
      <div className="bg-light">
        <div className="container py-4 " id="WhatIsBMI">
          <div className="px-3 fs-3">
            <span className="fw-bold me-2">Symptoms</span>
          </div>
          <div className="row align-items-center my-2">
            <div className="col-md-8 col-sm-12 intro">
              Weight gain usually occurs over time. Most people know when
              they've gained weight. Some of the signs of overweight or obesity
              include:
              <div class="small my-4 d-flex justify-content-between">
                <ul class="">
                  <li class="healthRisks">
                    Clothes feeling tight and needing a larger size
                  </li>
                  <li class="healthRisks">
                    Weight gain as compared to previous measurement
                  </li>
                  <li class="healthRisks">
                    Having extra fat around the waist.
                  </li>
                  <li class="healthRisks">Back and joint pains</li>
                  <li class="healthRisks">
                    Feeling tired even with routine activities
                  </li>
                </ul>
                <ul class="">
                  <li class="healthRisks">
                    A higher than normal body mass index (a person's weight in
                    kilograms divided by the square of his height in meters
                    (kg/m2)) and waist circumference. Other symptom may be:
                  </li>
                  <li class="healthRisks">Breathlessness</li>
                  <li class="healthRisks">
                    Psychological problems such as low self –esteem, low
                    confidence level
                  </li>
                  <li class="healthRisks">
                    Without proper treatment obesity can lead to various health
                    problems as dyslipidaemia, hypertension, type 2 diabetes,
                    coronary heart disease, stroke, osteoarthritis, cancer,
                    infertility, sleep apnea.
                  </li>
                  <li class="healthRisks">Increased sweating</li>
                  <li class="healthRisks">
                    Inability to cope with sudden physical activity
                  </li>
                </ul>
              </div>
            </div>
            <img
              className="col-md-4 col-sm-12 intro_img py-3"
              src={ObesityStress}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container py-4" id="WhatIsBMI">
        <div className="px-3 fs-3">
          <span className="fw-bold me-2">Causes</span>
        </div>
        <div className="row align-items-center mt-2">
          <div className="col-md-8 col-sm-12 intro">
            Obesity doesn't occur overnight. It develops gradually over time
            when there is disturbance in energy balance. Energy balance means
            that “energy in” through food intake and “energy out” through
            physical activities. Consuming excess calories from high-fat foods,
            sugars and doing little or no daily physical activity over the long
            time will lead to weight gain. The reasons for the imbalance between
            calorie intake and energy out may vary from individual to
            individual.
            <div class="small mt-4 d-flex justify-content-between">
              <ul class="">
                <li class="healthRisks">
                  <span className="fw-bold me-2">Emotional factors-</span>
                  For some people, eating habits are influenced by emotions such
                  as sadness, stress, boredom or anger and they react by eating
                  excessively.
                </li>

                <li class="healthRisks">
                  <span className="fw-bold me-2">Unhealthy diet-</span>
                  Diet rich in calories (fast foods), high calorie beverages,
                  oversized portions, bad eating habits (eating between meals,
                  preference to sweets, refined foods, and fats), diet lacking
                  with fruits and vegetables; all these factors contribute to
                  weight gain.
                </li>
              </ul>
            </div>
          </div>
          <img
            className="col-md-4 col-sm-12 intro_img py-3"
            src={ObesityCauses}
            alt=""
          />
        </div>
        <div class="small d-flex justify-content-between">
          <ul class="">
            <li class="healthRisks">
              <span className="fw-bold me-2">Genetics</span>
              may play a role in conversion of food into energy and how body
              burns calories during exercise. Genes may affect the amount of fat
              storage and distribution of fat in body.
            </li>
            <li class="healthRisks">
              <span className="fw-bold me-2">Pregnancy-</span>
              Woman gain weight during pregnancy and, some women find it
              difficult to lose weight after child birth. This weight gain may
              contribute to the development of obesity in women.
            </li>
            <li class="healthRisks">
              <span className="fw-bold me-2">Lack of sleep-</span>
              Not having enough sleep or getting too much sleep can cause
              changes in hormones that may increase appetite and craving for
              foods high in calories and carbohydrates, which can contribute to
              weight gain.
            </li>
            <li class="healthRisks">
              <span className="fw-bold me-2">Medicines-</span>
              Certain medicines such as corticosteroids, antidepressants and
              medicines used for seizure control may cause weight gain.
            </li>

            <li class="healthRisks">
              <span className="fw-bold me-2">Smoking-</span>
              Quitting smoking is often associated with weight gain. However,
              smoking is a serious health risk, and quitting is more important
              than possible weight gain.
            </li>
            <li class="healthRisks">
              <span className="fw-bold me-2">Age-</span>
              Obesity can occur at any age, even in young children. Infants with
              excessive weight have increased chances of obesity in later life.
              As age increases, muscle mass tends to decrease and some hormonal
              changes also occur; these factors along with less active lifestyle
              increase the risk of obesity in later age.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Overview;
