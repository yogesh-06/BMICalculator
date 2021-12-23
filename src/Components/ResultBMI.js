import React from "react";
const ResultBMI = ({ BMI, BMIstatus, className, range, advice }) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
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
                className={`px-2 text-light rounded-3 display-5 ${className}`}
                // style={{ opacity: "0.5" }}
              >
                {BMI && BMI?.toFixed(2)}
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

        <div className="offcanvas-body py-0  mb-0">
          <input
            className="form-range my-2"
            type="range"
            id="range"
            name="participants"
            min="1"
            max="100"
            value={range * 2}
          />
          {/* <small className="p-0 text-muted">
            {advice}
            <a href="https://www.zerofasting.com/" className="fs-6">
              our free courses.
            </a>
          </small>
          */}
          <div className="d-flex justify-content-around row">
            <small className="fw-bold text-muted col-md-8 col-sm-12">
              {advice} Your recommended to
            </small>
            <button
              className={`col-md-3 col-sm-10 mt-2 fs-5 text-light btn btn-sm ${className}`}
            >
              Get advice..
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResultBMI;
