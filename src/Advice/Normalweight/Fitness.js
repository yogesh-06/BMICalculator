import React from "react";
import Slider1 from "./FitnessImages/Slider1.jpg";
import Slider2 from "./FitnessImages/Slider2.png";
import Slider3 from "./FitnessImages/Slider3.png";
import Slider4 from "./FitnessImages/Slider4.jpg";
import Slider5 from "./FitnessImages/Slider5.jpg";
import Slider6 from "./FitnessImages/Slider6.jpg";
import Slider7 from "./FitnessImages/Slider7.jpg";
import Slider8 from "./FitnessImages/Slider8.jpg";
import Slider9 from "./FitnessImages/Slider9.jpg";
import Slider10 from "./FitnessImages/Slider10.jpg";
const Fitness = () => {
  return (
    <div className="container py-4" id="WhatIsBMI">
      <div
        id="carouselExampleFitness"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleFitness"
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
                <div className="fs-2 text-danger py-3">1. Lunges</div>A lunge is
                a great exercise because it mimics life, it mimics walking,"
                only exaggerated, says Petersen. Lunges are a bit more advanced
                than squats, says Cotton, helping to improve your balance as
                well. Here's how to do them right: Take a big step forward,
                keeping your spine in a neutral position. Bend your front knee
                to approximately 90 degrees, focusing on keeping weight on the
                back toes and dropping the knee of your back leg toward the
                floor.To make a lunge even more functional, says Rufa, try
                stepping not just forward, but back and out to each side.
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
                <div className="fs-2 text-danger py-3">2. Push-ups</div>
                Here's how to do a perfect push-up: From a face-down position,
                place your hands slightly wider than shoulder-width apart. Place
                your toes or knees on the floor, and try to create a perfect
                diagonal with your body, from the shoulders to the knees or
                feet. Keep the glutes [rear-end muscles] and abdominals engaged.
                Then lower and lift your body by bending and straightening your
                elbows, keeping your torso stable throughout. There are always
                ways to make it harder, says Rufa. Once your form is perfect,
                try what he calls the "T-stabilization" push-up: Get into
                push-up position, then do your push-ups with one arm raised out
                to the side, balancing on the remaining three limbs without
                rotating your hips.
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
                <div className="fs-2 text-danger py-3">3. Squats</div>
                Strength training is essential, the experts say. "The more
                muscular fitness you have," says Cotton, "the greater the
                capacity you have to burn calories." And our experts tended to
                favor strength-training exercises that target multiple muscle
                groups. Squats, which work the quadriceps, hamstrings, and
                gluteals, are an excellent example. "What makes an exercise
                functional is how you perform the exercise," he says. "If you
                have bad technique, it's no longer functional."
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
                <div className="fs-2 text-danger py-3">4. Walking </div>
                Any exercise program should include cardiovascular exercise,
                which strengthens the heart and burns calories. And walking is
                something you can do anywhere, anytime, with no equipment other
                than a good pair of shoes. It's not just for beginners, either:
                Even the very fit can get a good workout from walking. "Doing a
                brisk walk can burn up to 500 calories per hour," says Robert
                Gotlin, DO, director of orthopaedic and sports rehabilitation at
                Beth Israel Medical Center in New York. Since it takes 3,500
                calories to lose a pound, you could expect to lose a pound for
                every seven hours you walk, if you did nothing else.
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
                  5. Interval training
                </div>
                Whether you're a beginner or an exercise veteran, a walker or an
                aerobic dancer, adding interval training to your cardiovascular
                workout will boost your fitness level and help you lose weight.
                "Varying your pace throughout the exercise session stimulates
                the aerobic system to adapt," says Cotton. "The more power the
                aerobic system has, the more capacity you have to burn
                calories." The way to do it is to push the intensity or pace for
                a minute or two, then back off for anywhere from two to -10
                minutes (depending on how long your total workout will be, and
                how much time you need to recover). Continue doing this
                throughout the workout.
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
                  6. Abdominal Crunches
                </div>
                For a standard crunch, says Cotton, begin lying on your back
                with feet flat on the floor and fingertips supporting your head.
                Press your low back down and begin the exercise by contracting
                abdominals and peeling first your head (tucking your chin
                slightly), then your neck, shoulders, and upper back off the
                floor. Be careful not to pull your neck forward by sticking the
                chin out; don't hold your breath, and keep elbows out of your
                line of vision to keep chest and shoulders open. For his part,
                Petersen teaches his clients to do crunches with their feet off
                the floor and knees bent. He says that with feet kept on the
                floor, many people tend to arch the back and engage the hip
                flexors.
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
                <div className="fs-2 text-danger py-3">7. Bent-over Row</div>
                Talk about bang for the buck: This exercise works all the major
                muscles of the upper back, as well as the biceps. Here's how to
                do it with good form. Stand with feet shoulder-width apart, then
                bend knees and flex forward at the hips. (If you have trouble
                doing this exercise standing up, support your weight by sitting
                on an incline bench, facing backward.) Tilt your pelvis slightly
                forward, engage the abdominals, and extend your upper spine to
                add support. Hold dumbbells or barbell beneath the shoulders
                with hands about shoulder-width apart. Flex your elbows, and
                lift both hands toward the sides of your body. Pause, then
                slowly lower hands to the starting position. (Beginners should
                perform the move without weights.)
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
                <div className="fs-2 text-danger py-3">8. Burpees</div>
                An exercise we love to hate, burpees are a super effective
                whole-body move that provides great bang for your buck for
                cardiovascular endurance and muscle strength.
                <br /> <span className="fw-bold">1.</span> Start by standing
                upright with your feet shoulder-width apart and your arms down
                at your sides.
                <br /> <span className="fw-bold">2.</span> With your hands out
                in front of you, start to squat down When your hands reach the
                ground, pop your legs straight back into a pushup position.
                <br /> <span className="fw-bold">3. </span>
                Jump your feet up to your palms by hinging at the waist
                <br /> Get your feet as close to your hands as you can get,
                landing them outside your hands if necessary.
                <br /> <span className="fw-bold">4.</span> Stand up straight,
                bringing your arms above your head and jump.
                <br /> <span className="fw-bold">5.</span> This is one rep.
                Complete 3 sets of 10 reps as a beginner.
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
                <div className="fs-2 text-danger py-3">9. Side planks</div>
                Side planks help build core strength, which can help reduce
                lower back pain. Side planks work the buttocks, hips, and
                abdominal muscles. <br />
                <br />
                <span className="text-danger fw-bold">
                  How to do them:
                </span>{" "}
                <br />
                <span className="fw-bold">1. </span>
                Lie on the right side with the legs outstretched directly on top
                of each other and the elbow under the shoulder on the right arm.
                <br /> <span className="fw-bold">2. </span>
                Engage the abdominals and lift the knees and hips off the floor,
                keeping the head and body aligned.
                <br /> <span className="fw-bold">3. </span>
                Hold the position for 15–20 seconds, focusing on not letting the
                hips, head, or shoulders drop.
                <br /> <span className="fw-bold">4. </span>
                Slowly return to the floor, switch to the left side, and repeat.
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
                <div className="fs-2 text-danger py-3">10. Glute bridge</div>
                The glute bridge is good for the muscles in the back of the
                body, known as the posterior chain. <br />
                <br />
                <span className="text-danger fw-bold">How to do it:</span>{" "}
                <br /> <span className="fw-bold">1. </span> Lie on the back with
                the knees bent and the feet flat on the floor. <br />{" "}
                <span className="fw-bold">2. </span>Contract the buttocks and
                abdominals to lift the hips off the floor, bringing them in line
                with the shoulders and knees. Avoid arching the lower back.
                <br /> <span className="fw-bold">3. </span> Slowly lower back to
                the starting position.
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleFitness"
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
          data-bs-target="#carouselExampleFitness"
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
export default Fitness;
