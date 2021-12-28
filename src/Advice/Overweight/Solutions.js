import React from "react";
import Slider1 from "./ObeseImages/Slider1.jpg";
import Slider2 from "./ObeseImages/Slider2.jpg";
import Slider3 from "./ObeseImages/Slider3.jpg";
import Slider4 from "./ObeseImages/Slider4.jpg";
import Slider5 from "./ObeseImages/Slider5.jpg";
import Slider6 from "./ObeseImages/Slider6.jpg";
import Slider7 from "./ObeseImages/Slider7.jpg";
import Slider8 from "./ObeseImages/Slider8.jpg";
import Slider9 from "./ObeseImages/Slider9.jpg";
import Slider10 from "./ObeseImages/Slider10.jpg";
const Solutions = () => {
  return (
    <>
      <div className="container py-4" id="WhatIsBMI">
        <div className="bg-light mb-4 border-bottom">
          <div className="px-3 fs-3 ">
            <span className="fw-bold me-2">Survay Say's : </span>
            Recommendations for medical management of
            <span className="text-danger fw-bold"> Asian Indians </span>
            with obesity. Advise a hypo-caloric individualized diet. Advise at
            least 60 min of physical activity (aerobic and resistance exercises)
            daily or 300 min of activity per week. GLP-1 agonists in obese
            diabetic individuals.
          </div>
        </div>
        <div className="px-3 fs-3">
          <span className="fw-bold me-2">
            Tips to Lose 10 kilograms or More:
          </span>
        </div>
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
                  <div className="fs-2 text-danger py-3">
                    It's All About Planning
                  </div>
                  When you have a lot of weight to lose, it means playing the
                  long game. And during that time, you'll face challenges.
                  Weight loss experts and people who have done it offer you
                  their ideas to cut calories, fight the "hangry," make exercise
                  easier, stay on track, and more. Some are tried-and-true, and
                  others may surprise you.
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
                  <div className="fs-2 text-danger py-3">
                    Go Big for Breakfast{" "}
                  </div>
                  People who eat more in the morning and less at night tend to
                  lose more weight. Some studies suggest that starting your day
                  with a high-protein meal -- especially warm, solid food --
                  helps you feel fuller and less hungry later. Shoot for 350-400
                  calories with at least 25 grams of protein, says Domenica
                  Rubino, MD, director of the Washington Center for Weight
                  Management & Research.
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
                  <div className="fs-2 text-danger py-3">
                    Keep a Photo Diary
                  </div>
                  "We have horrible memories in terms of what we eat," says
                  Susan Albers, PsyD, author of EatQ. Save your food photos in a
                  daily file. Before your next snack or meal, review them.
                  They'll remind you what you've already eaten. And that may
                  help you decide to downsize or choose something else.
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
                  <div className="fs-2 text-danger py-3">Use an App </div>
                  "I just do not see food and portions the way normally thin
                  people see them," blogger Lisa Durant says. She used My
                  Fitness Pal to focus on her relationship with food. She
                  tracked what she ate and how much. That helped her be honest
                  with herself. She also set weight loss and fitness goals to
                  track her progress. Without an app, "I would absolutely gain
                  some weight back."
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
                  <div className="fs-2 text-danger py-3">
                    Try a Meal Replacement Plan{" "}
                  </div>
                  Under a licensed professional's care, you'll eat one regular
                  meal per day and swap the others for special shakes, soups, or
                  bars. "If you can stick to it, you'll see big results in 6
                  months to a year," says Ken Fujioka, MD, an obesity specialist
                  at the Scripps Clinic in San Diego.
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
                  <div className="fs-2 text-danger py-3">
                    Set Up Your Food Storage
                  </div>
                  Out of sight, out of mind -- and mouth. After you purge your
                  home of those treats you can't resist, Albers recommends
                  taking the idea a step further: Assign shelves in the pantry
                  and the fridge so your healthy food becomes easy to see and
                  reach. Put fresh veggies and fruit at eye level instead of
                  inside a drawer, and you're more likely to grab them when you
                  open the door.
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
                  <div className="fs-2 text-danger py-3">Shop Smart</div>
                  Don't leave your meals to chance. Have ingredients on hand so
                  you aren't tempted to resort to take-out. Think about menus
                  that work for the household: Maybe your veggie stir-fry can be
                  their side dish, too. Make a grocery list together, even if
                  you're cooking separately. Stay out of bulk warehouse stores,
                  Albers says. The oversized items can invite overeating.
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
                  <div className="fs-2 text-danger py-3">
                    Outsmart Your Inner Critic
                  </div>
                  When (let's be honest, there's no "if" about it) you get
                  off-track, it can be hard to forgive yourself. So pretend it's
                  a friend who slipped up and is upset, Rubino says. Write a
                  note to them. Then read it out loud -- to yourself. It will
                  likely be kinder and more encouraging than anything the little
                  voice in your head would say.
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
                  <div className="fs-2 text-danger py-3">
                    Try Physical Therapy
                  </div>
                  You'll learn to reconnect with your body, Rubino says. A
                  physical therapist is trained to work with people who have
                  medical issues and trouble moving in their daily lives. Think
                  of them as someone who'll get you ready for the personal
                  trainer. Your therapist will design a program, tailored for
                  you, to improve your balance, strength, and range of motion.
                  PT can often help ease joint pain you may have, too.
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
                  <div className="fs-2 text-danger py-3">
                    Get Checked for Sleep Apnea
                  </div>
                  You may not be resting as well as you think you are. This
                  condition, which interrupts your breathing while you sleep,
                  often affects people who are overweight. It can disrupt your
                  slumber and you won't know it. Studies show that a lack of
                  sleep alters hormones that control hunger. Rubino suggests
                  being tested and treated.
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
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
    </>
  );
};
export default Solutions;
