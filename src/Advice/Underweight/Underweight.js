import React from "react";
import Slider1 from "../../Images/Malnutrition-challenge.jpg";
import Slider2 from "../../Images/Underweight-childres.jpg";
import Slider3 from "../../Images/Underweight-child.jpg";
import MalnutritionGraph from "../../Images/MalnutritionGraph.jpg";
import UnderweightKid from "../../Images/UnderweightKid.jpg";
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

        <div className="container">
          <div className="bg-light px-3">
            <div className="fs-3 text-decoration-underline text-danger">
              What Is Under-Weight?
            </div>
            <span className=" fs-5 small">
              What is a underweight person? An underweight person is a person
              whose body weight is considered too low to be healthy. The report
              — considered the most authoritative global study tracking progress
              towards ending hunger and malnutrition — said that the number of
              undernourished people in India declined from 249.4 million in
              2004-06 to 189.2 million in 2017-19.
              <span className="text-danger fw-bold"> India</span>.
            </span>
          </div>

          <div className="px-3 mt-3 fs-3">
            <span className="fw-bold me-2">HighLights</span>
          </div>
          <div className="row align-items-start my-2">
            <div className="col-md-8 col-sm-12 intro">
              <div className="text-light bg-danger mb-1 ps-2">
                • India leads the world in being home to over 40% of the global
                underweight population.
              </div>
              While India and China continue to have the largest number of
              underweight people in the world, both the countries have also
              broken into the top five in terms of obesity, a new study
              published in the Lancet has found. With 102 million men and 101
              million women underweight, India leads the world in being home to
              over 40% of the global underweight population. China is a distant
              second with about 8% of underweight men and over 12% of
              underweight women. <br />
              Half the Indians aged 45 years and above have a desirable body
              mass index (BMI) while 21 per cent are underweight, 21 per cent
              are overweight and 7 per cent are obese, according to a health
              ministry report released on January 6, 2021. Under-nutrition was
              reported more among people in this age group living in the rural
              areas and a higher proportion of women were overweight or obese
              than men, the report said.
            </div>
            <img
              className="col-md-4 col-sm-12 intro_img py-2"
              src="https://static.toiimg.com/thumb/msid-51658193,width-800,height-600,resizemode-75/51658193.jpg"
              alt=""
            />
          </div>

          <div className="px-3 mt-3 fs-3">
            <span className="fw-bold me-2">Causes</span>
          </div>
          <div className="row align-items-center my-2">
            <img
              className="col-md-4 col-sm-12 intro_img py-2"
              src="https://w.ndtvimg.com/sites/3/2020/01/10122518/Malnutrition-In-India.png"
              alt=""
            />
            <div className="col-md-8 col-sm-12 intro">
              One of the major causes for malnutrition in India is economic
              inequality. Due to the low social status of majority of the
              population, their diet often lacks in both quality and quantity.
              Women who suffer from malnutrition are less likely to have healthy
              babies. Nutrition deficiencies inflict long-term damage to both
              individuals and society.
              <br /> Compared with their better-fed peers, nutrition-deficient
              individuals are more likely to have infectious diseases such as
              pneumonia and tuberculosis, which lead to a higher mortality rate.
              Besides, nutrition-deficient individuals are less productive at
              work. Low productivity not only gives them low pay that traps them
              in a vicious circle of under-nutrition, [2] but also brings
              inefficiency to the society, especially in India where labor is a
              major input factor for economic production. <br />
              The 2017 Global Hunger Index (GHI) Report by International Food
              Policy Research Institute (IFPRI) ranked India 100th out of 118
              countries with a serious hunger situation. Amongst South Asian
              nations, it ranks third behind only Afghanistan and Pakistan with
              a GHI score of 29.0 ("serious situation"). [6] The 2019 Global
              Hunger Index (GHI) report ranked India 102nd out of 117 countries
              with a serious issue of child wasting. At least one in five
              children under the age of five years in India is wasted.
            </div>
          </div>

          <div className="px-3 mt-3 fs-3">
            <span className="fw-bold me-2">Causes</span>
          </div>
          <div className="row align-items-center my-2">
            <div className="col-md-8 col-sm-12 intro">
              In general, those who are poor are at risk for under-nutrition, in
              India while those who have high socio-economic status are
              relatively more likely to be over-nourished. Anemia is negatively
              correlated with wealth. When it comes to child malnutrition,
              children in low-income families are more malnourished than those
              in high-income families. PDS system in India which account for the
              distribution of wheat and rice only, by which the proteins are
              insufficient by these cereals which leads to malnutrition also.
              One cultural belief that may lead to malnutrition is religion.
              Among these is the influence of religions, especially in India are
              restricted from consuming meat. Also, other Indians are strictly
              vegan, which means, they do not consume any sort of animal
              product, including dairy and eggs. This is a serious problem when
              inadequate protein is consumed because 56% of poor Indian
              households consume cereal to consume protein. It is observed that
              the type of protein that cereal contains does not parallel to the
              proteins that animal products contain. This phenomenon is most
              prevalent in the rural areas of India where more malnutrition
              exists on an absolute level. Whether children are of the
              appropriate weight and height is highly dependent on the
              socio-economic status of the population. Children of families with
              lower socioeconomic standing are faced with sub-optimal growth.
            </div>
            <img
              className="col-md-4 col-sm-12 intro_img py-2"
              src={UnderweightKid}
              alt=""
            />
          </div>

          <div className="px-3 mt-3 fs-3">
            <span className="fw-bold me-2">Solutions by Government</span>
          </div>
          <div className="row align-items-start my-2">
            <img
              className="col-md-4 col-sm-12 intro_img py-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/The_President%2C_Shri_Pranab_Mukherjee_launched_the_Mid-Day_Meal_Scheme_for_Nursery_%26_KG_Classes_of_the_Kalyan_Kendra_School_at_Kalyan_Kendra_of_Rashtrapati_Bhavan%2C_in_New_Delhi_on_February_15%2C_2013.jpg/1024px-thumbnail.jpg"
              alt=""
            />

            <div className="col-md-8 col-sm-12 intro">
              <span className="fw-bold text-danger me-1">
                Midday meal scheme in Indian schools:
              </span>
              The Indian government started the midday meal scheme on 15 August
              1995. It serves millions of children with freshly cooked meals in
              almost all the government-run schools or schools aided by the
              government fund. Apart from this, the International Society for
              Krishna Consciousness's (ISKCON) ISKCON Food Relief Foundation,
              the Nalabothu Foundation, and the Akshaya Patra Foundation run the
              world's largest NGO-run midday meal programs, each serving freshly
              cooked plant-based meals to over 1.3 million school children in
              government and government-aided schools in India. These programs
              are conducted with part subsidies from the government and partly
              with donations from individuals and corporations. The meals served
              by Food for Life Annamrita and Akshaya Patra comply with the
              nutritional norms given by the government of India and aims to
              eradicate malnutrition among children in India.
            </div>
          </div>

          <div className="row d-flex justify-content-center my-3">
            <div className="px-3 mt-3 fs-4">
              <span className="fw-bold me-2">
                • Prevalence of under-nutrition (underweight) among older
                adults, India (2017-18).
              </span>
            </div>
            <img
              className="col-sm-12 col-md-10 intro_img py-2"
              src={MalnutritionGraph}
              alt=""
            />
          </div>
        </div>
      </>
    </>
  );
};
export default Underweight;
