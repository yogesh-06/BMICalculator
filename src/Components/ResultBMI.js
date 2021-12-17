import React from "react";
const ResultBMI = ({ BMI, BMIstatus, className, range, setRange }) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-bottom rounded-top pb-2"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
        // style={{ opacity: "0.9" }}
      >
        <div className="offcanvas-header py-1 d-flex justify-content-between">
          <p className="m-0">Your BMI score</p>
          <button
            style={{ border: "none", background: "none" }}
            class="fa fa-info-circle"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          ></button>
        </div>
        <div className="offcanvas-header py-0">
          <div className="d-flex justify-content-start">
            <div>
              <div
                className={`px-2 rounded-3 display-5 ${className}`}
                // style={{ opacity: "0.5" }}
              >
                {BMI?.toFixed(2)}
              </div>
            </div>
            <div className="ms-3">
              <p className="m-0">Your category</p>
              <span
                className={`position-absolute p-2 border border-light rounded-circle ${className}`}
              ></span>
              <h6 className="ms-4">{BMIstatus} </h6>
            </div>
          </div>
        </div>

        <div className="offcanvas-body py-0">
          <input
            className="form-range"
            type="range"
            id="range"
            name="participants"
            min="1"
            max="40"
            value={range}
          />
          <small className="p-0 text-muted" style={{ fontSize: "12px" }}>
            Your BMI of less than 18 indicates that you are Underweight, so you
            may need to put on some weight. Your are recommended to ask your
            doctor or a dietitian for advice.
          </small>
          <br />
          <small className="fw-bold text-muted">
            Your healthy BMI range: 56-76kg
          </small>
          <div className="">
            {/* <input
              className="form-range"
              type="range"
              name="participants"
              min="1"
              max="100"
              value={range}
            /> */}
            <span className="rangeslider__tooltip" id="range-tooltip"></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResultBMI;
