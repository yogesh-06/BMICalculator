import React from "react";
const ResultBMI = ({ BMI, BMIstatus, className }) => {
  return (
    <>
      <div
        class="offcanvas offcanvas-bottom rounded-top"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
        style={{ opacity: "0.9" }}
      >
        <div class="offcanvas-header ">
          <div className="d-flex justify-content-start">
            <div>
              <p className="m-0">Your BMI score</p>
              <div
                class="px-2 rounded-3 display-5"
                style={{ backgroundColor: "lightskyblue" }}
              >
                {BMI.toFixed(2)}
              </div>
            </div>
            <div className="m-4">
              <p className="m-0">Your category</p>
              <span
                class={`position-absolute p-2 border border-light rounded-circle ${className}`}
              ></span>
              <h6 className="ms-4">{BMIstatus} </h6>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <span
              className="btn btn-dark px-2 py-0 me-2 fw-bold rounded-circle"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              i
            </span>
          </div>
        </div>

        <div class="offcanvas-body py-0 ">
          <div class="">
            <input
              type="range"
              class="form-range "
              min="0"
              max="5"
              id="customRange2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ResultBMI;
