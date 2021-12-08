import React from "react";
const calculateBMI = ({
  setHeightUnit,
  setWeightUnit,
  setHeight,
  setWeight,
  height,
  weight,
  calculateBMI,
}) => {
  return (
    <>
      <div className="container text-light">
        <div className="row mb-2">
          <div className="form-group col-7 pe-1">
            <label className="mt-2">Height</label>
            <input
              name="height"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              // onBlur={handleBlur}
              style={{
                borderBottom: "solid black 2px",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                boxShadow: "none",
                // backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
              className="form-control bg-light py-2 col-6"
            />
          </div>

          <div className="form-group col-5 ps-0">
            <label className="mt-2">Unit</label>
            <select
              className="form-select form-control bg-light  py-2 col-6"
              aria-label="Default select example"
              onChange={(e) => {
                setHeightUnit(e.target.value);
              }}
              style={{
                borderBottom: "solid black 2px",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                boxShadow: "none",
              }}
            >
              <option value="Centimetres">Centimetres</option>
              <option value="FeetAndInches">Feet and Inches</option>
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="form-group col-7 pe-1">
            <label className="mt-2">Weight</label>
            <input
              name="weight"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{
                borderBottom: "solid black 2px",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                boxShadow: "none",
                // backgroundColor: "rgba(0, 0, 0, 0.2)",
              }}
              className="form-control bg-light  py-2 col-6"
            />
          </div>
          <div className="form-group col-5 ps-0">
            <label className="mt-2">Unit</label>
            <select
              className="form-select form-control bg-light  py-2 col-6"
              aria-label="Default select example"
              onChange={(e) => setWeightUnit(e.target.value)}
              style={{
                borderBottom: "solid black 2px",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                boxShadow: "none",
              }}
            >
              <option defaultValue="Kilograms">Kilograms</option>
              <option value="Pounds">Pounds</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-light mt-2 px-3 py-2"
          onClick={() => calculateBMI(height, weight)}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
          style={{ borderRadius: "6px" }}
        >
          <small className="fw-bold">CALCULATE BMI</small>
        </button>
      </div>
    </>
  );
};
export default calculateBMI;
