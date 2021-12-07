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
        <div className="container modal-dialog">
          <div className="modal-content p-3">
            <h5 className="modal-title" id="exampleModalLabel">
              Info
            </h5>

            <div className="modal-body small">
              BMI is useful measurment for most people over 20 years. The result
              is an estimate and should be considered as a rough guide only as
              it does not take into account age, gender, ethnicity or body
              composition.
            </div>
            {/* <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoModal;
