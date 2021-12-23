import React from "react";
import Navbar from "./Navbar";
import Slider1 from "../Images/Obesity-f-t.jpg";
import Slider2 from "../Images/OverweightLady.jpg";
import Slider3 from "../Images/OverweightSlide-1.png";
const Overweight = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(to bottom, #ff0831, #ffc500)",
          backgroundAttachment: "fixed",
        }}
        className="sticky-top"
      >
        <Navbar />
      </div>
      <div className="">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active text-center">
              <img src={Slider1} class="d-block w-100" alt="..." />
              {/* <button
                className="rounded-3 btn fw-bold fs-6"
                style={{ position: "relative", top: "-70px" }}
              >
                Lorem, ipsum dolor sit amet consectetur
              </button> */}
            </div>
            <div class="carousel-item">
              <img src={Slider2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Slider3} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Overweight;
