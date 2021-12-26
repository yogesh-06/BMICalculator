import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Main from "../Images/Mainpage.png";

const calculateBMI = ({
  setHeightUnit,
  setWeightUnit,
  setHeight,
  setWeight,
  height,
  weight,
  calculateBMI,
}) => {
  const schema = Yup.object({
    height: Yup.string().required(),
    weight: Yup.string().required(),
  });
  return (
    <>
      <Formik
        initialValues={{ height: "", weight: "" }}
        onSubmit={(values) => {
          console.log(values);
          calculateBMI(values.height, values.weight);
        }}
        validationSchema={schema}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          values,
          touched,
          isValid,
        }) => (
          <div className="container text-light mb-2">
            {console.log(errors)}

            <div className="row mb-2">
              <div className="form-group col-7 pe-1">
                <label className="mt-2">Height</label>
                <input
                  name="height"
                  placeholder="Height"
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                  // onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    borderBottom: "solid black 2px",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    boxShadow: "none",
                  }}
                  className="form-control bg-light py-2 col-6"
                />

                {/* {touched && errors.height ? (
                  <small className="text-danger bg-light px-2">
                    {errors.height}{" "}
                  </small>
                ) : (
                  ""
                )} */}
              </div>

              <div className="form-group col-5 ps-0">
                <label className="mt-2">Unit</label>
                <select
                  className="form-select form-control bg-light  py-2 col-6"
                  aria-label="Default select example"
                  onChange={(e) => setHeightUnit(e.target.value)}
                  style={{
                    borderBottom: "solid black 2px",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    boxShadow: "none",
                  }}
                >
                  <option value="FeetAndInches">Feet and Inches</option>
                  <option value="Centimetres">Centimetres</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="form-group col-7 pe-1">
                <label className="mt-2">Weight</label>
                <input
                  name="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  // onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Weight"
                  style={{
                    borderBottom: "solid black 2px",
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    boxShadow: "none",
                  }}
                  className="form-control bg-light  py-2 col-6"
                />
                {/* {touched && errors.weight ? (
                  <small className="text-danger bg-light px-2">
                    {errors.weight}{" "}
                  </small>
                ) : (
                  ""
                )} */}
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
                  <option
                    value="Pounds"
                    data-bs-toggle="tooltip"
                    title="Option disabled by developer"
                    disabled
                  >
                    Pounds
                  </option>
                </select>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-sm btn-light mt-2 px-3 py-2"
              onClick={() => calculateBMI(height, weight)}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom"
              style={{ borderRadius: "6px" }}
            >
              <small className="fw-bold">CALCULATE BMI</small>
            </button>
          </div>
        )}
      </Formik>
      <div
        className="row align-items-center d-flex justify-content-center mx-3 rounded-3 mt-5"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <div className="col-6 fs-2 ">
          Keep your health in check
          <h3 className="">with online BMI Calculator</h3>
        </div>
        <img className="main col-6 " src={Main} alt="" />
      </div>
    </>
  );
};
export default calculateBMI;
