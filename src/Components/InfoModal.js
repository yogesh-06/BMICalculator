import React from "react";
const InfoModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="container modal-dialog" style={{ marginTop: "135px" }}>
          <div className="modal-content p-3">
            <h5 className="modal-title" id="exampleModalLabel">
              Info
            </h5>

            <p className="small">
              BMI is useful measurment for most people over 20 years. The result
              is an estimate and should be considered as a rough guide only as
              it does not take into account age, gender, ethnicity or body
              composition.
            </p>

            <div className="modal-body">
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex ">
                  <div className="px-1 me-2 bg-primary"></div>
                  <small>Underweight</small>
                </div>
                <div>
                  <small>18.5</small>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex ">
                  <div className="px-1 me-2 bg-success"></div>
                  <small>Healthy weight</small>
                </div>
                <div>
                  <small>18.5 - 24.9</small>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex ">
                  <div className="px-1 me-2 bg-warning"></div>
                  <small>Pre-obesity</small>
                </div>
                <div>
                  <small>25.0 - 29.9</small>
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div className="d-flex ">
                  <div className="px-1 me-2 bg-danger"></div>
                  <small>Overweight</small>
                </div>
                <div>
                  <small>30+</small>
                </div>
              </div>
            </div>
            <p
              className="text-primary text-end mx-4 fw-bold m-0"
              type="button"
              data-bs-dismiss="modal"
            >
              ok
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoModal;
