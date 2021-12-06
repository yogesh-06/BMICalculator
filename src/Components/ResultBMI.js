import React from "react";
const ResultBMI = ({ BMI }) => {
  return (
    <>
      <div
        class="offcanvas offcanvas-bottom"
        tabindex="-1"
        id="offcanvasBottom"
        aria-labelledby="offcanvasBottomLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasBottomLabel">
            Result: {Math.round(BMI)}
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body small"></div>
      </div>
    </>
  );
};
export default ResultBMI;
