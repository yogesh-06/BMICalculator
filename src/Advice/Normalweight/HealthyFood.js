import React from "react";
import Slider1 from "./HealthImages/Slider1.jpg";
import Slider2 from "./HealthImages/Slider2.jpg";
import Slider3 from "./HealthImages/Slider3.jpg";
import Slider4 from "./HealthImages/Slider4.jpg";
import Slider5 from "./HealthImages/Slider5.jpg";
import Slider6 from "./HealthImages/Slider6.jpg";
import Slider7 from "./HealthImages/Slider7.jpg";
import Slider8 from "./HealthImages/Slider8.jpg";
import Slider9 from "./HealthImages/Slider9.jpg";
import Slider10 from "./HealthImages/Slider10.jpg";
const HealthyFood = () => {
  return (
    <div className="container py-4" id="WhatIsBMI">
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="9"
            aria-label="Slide 10"
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
                <div className="fs-2 text-danger py-3">1. Yoghurt/Curd</div>
                Yoghurt, Curd or “Dahi,” as it is commonly known in most parts
                of India, is one of the most commonly available food items. It
                also has a remarkable tendency to change its quality in response
                to climate. What we mean is that yoghurt tends to be watery in
                more humid climates, but creamier in drier regions. This goes
                well with what people in each of these areas need. Further,
                yoghurt contains good bacteria that help us digest food and keep
                us healthy. It also contains large amounts of calcium, potassium
                and vitamin B.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider2}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">2. Leafy Vegetables</div>
                Green leafy vegetables are already popular in the Indian diet.
                But they ought to be used more. Spinach (Palak) is found all
                over the country throughout the year. Cabbages are also found
                around the year in most places now. Further, depending on where
                in the country you live, there are hundreds of local varieties
                of leafy greens just waiting to be included in your diet. These
                vegetables are loaded with iron, vitamin K, and other essential
                minerals and nutrients that help prevent a load of diseases,
                including cancer.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider3}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">3. Eggs</div>
                While they are not always an option for vegetarians, eggs are
                excellent sources of protein. The yolk does contain cholesterol
                – so, if you are wary of consuming the entire thing, the
                egg-white can help provide the essential minerals and nutrients
                to your body. They have less than 100 calories each. You can add
                eggs to almost any dish and make it delicious.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider4}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">4. Pulses </div>
                The Indian diet, whether you are a vegetarian or not, is
                extremely rich in grains. Rice and flour are the obvious
                examples, but remember that pulses are an equal part of our
                staple. Thankfully, there are so many types of pulses available
                that you can still maintain variety in your diet. Pulses are
                rich in dietary fibre and vitamins A, B, C and E. They also
                contain minerals like calcium, iron, potassium and zinc. Most
                importantly, they are the major source of protein in a
                vegetarian diet.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider5}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">5. Paneer</div>
                Cottage cheese or paneer is a mainstay of the vegetarian diet,
                but even non-vegetarians consume it on a regular basis. Paneer
                is a versatile food, lending itself well to many different kinds
                of dishes. However, you should avoid the fat-heavy variety that
                is made from whole milk. Homemade paneer made from toned (or
                skimmed) milk contains less fats and cholesterol and is much
                healthier for you. It will still retain high quantities of
                protein and calcium.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider6}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">6. Rice and Flour</div>
                We spoke about grains earlier. So it is only fair that we
                address the most popular ones. White rice is still the most
                common grain consumed in India. However, you should try to
                switch to brown rice since it contains more fibre, making it a
                better alternative. The move to whole wheat flour has been more
                successful and it is rare to find white atta rotis and chappatis
                these days. You should also consider doing the same for other
                wheat products like bread.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider7}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">7. Spices</div>
                Indian spices have been world-famous since ancient times. Aside
                from their incredible taste and flavours, many spices are also
                healthy for you. Haldi or turmeric contains healing properties,
                helps reduce cholesterol and prevents blood clots that can lead
                to heart attacks. Cardamom boosts metabolism, while the
                components of garam masala contain varying degrees of minerals
                while also promoting digestion.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider8}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">8. Garlic</div>
                Garlic is not only flavourful, but is also renowned for its many
                healing properties. It is a primary source of natural
                anti-bacterial agents. Health benefits of Garlic: Garlic
                contains a compound Called Allicin, which has potent medicinal
                properties Consuming garlic on a daily basis (in food or raw)
                helps to lower cholesterol levels because of the anti-oxidant
                properties of Allicin. The invigorating properties of garlic
                protect the skin from the effect of free radicals and slow down
                the depletion of collagen which leads to loss of elasticity in
                ageing skin.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider9}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">9. Beans</div>
                Beans and other legumes are a great source of proteins, calcium,
                iron and folic acid. They are also versatile, allowing you to
                cook many Indian dishes. They also go well with cuisines of
                other cultures – from Asian to European.
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex">
              <img
                src={Slider10}
                className="d-block col-md-6 col-sm-12"
                alt="..."
              />
              <div className="col-md-6 col-sm-12">
                <div className="fs-2 text-danger py-3">10. Fruits</div>
                Many traditional Indian fruits are great for you. They contain
                all kinds of minerals and vitamins that are essential for us.
                You should regularly eat seasonal and perennial (year-around)
                fruit like apples, oranges, blueberries, pomegranates, papayas,
                pineapples, etc. Some fruits need to be avoided by people with
                certain health conditions, but for the average person, they are
                the perfect snack food that can replace the pack of fried chips.
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default HealthyFood;
