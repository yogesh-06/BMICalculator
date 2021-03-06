import React, { useState } from "react";
import ResultBMI from "./ResultBMI";
import CalculateBMI from "./CalculateBMI";
import InfoModal from "./InfoModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Introduction from "./Introduction";

const BMICalculator = () => {
  const [heightUnit, setHeightUnit] = useState("FeetAndInches");
  const [weightUnit, setWeightUnit] = useState("Kilograms");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState(0);
  const [BMIstatus, setBMIstatus] = useState("");
  const [className, setClassName] = useState("");
  const [advice, setAdvice] = useState("");
  const [range, setRange] = useState(18);
  const [button, setButton] = useState("");
  const [cardRow, setCardRow] = useState(true);
  const calcBMI = (height, weight) => {
    console.log("---", height, weight, heightUnit, weightUnit);
    setBMI(null);
    let data;

    console.log(weight, height);

    if (weight === "" || height === "") {
      // setAlert(true);
      // setTimeout(() => {
      //   setAlert(false);
      // }, 3000);
      console.log("---");
      toast("Please enter valid height and width ");
      return;
    }

    if (heightUnit === "FeetAndInches") {
      data = weight / (height / 3.2808) ** 2;
      setBMI(weight / (height / 3.2808) ** 2);
    } else if (heightUnit === "Centimetres") {
      setBMI(weight / (height / 100) ** 2);
      data = weight / (height / 100) ** 2;
    }

    if (weightUnit === "Pounds") {
      data = (weight / (height * height)) * 4.88;
      setBMI((weight / (height * height)) * 4.88);
      console.log("pounds");
    } else {
      console.log("kilograms");
    }

    if (data < 18) {
      setBMIstatus("Underweight");
      setClassName("bg-primary");
      setAdvice(
        "Your BMI of less than 18 indicates that you are Underweight, so you may need to put on some weight."
      );
      setButton("/Underweight");
      setRange(data);
    } else if (data > 18 && data <= 25) {
      setBMIstatus("Healthy weight");
      setClassName("bg-success");
      setAdvice(
        "Congratulations! Your BMI indicates you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems."
      );
      setButton("/Normalweight");
      setRange(data);
    } else if (data > 25 && data <= 30) {
      setBMIstatus("Pre-obesity");
      setClassName("bg-warning");
      setAdvice(
        "Your BMI of 25-30 indicates that you are slightly overweight. You may be advised to lose some weight for health reasons"
      );
      setButton("/Overweight");
      setRange(data);
    } else if (data > 30) {
      setBMIstatus("Overweight");
      setClassName("bg-danger");
      setAdvice(
        "Your BMI of over than 30 indicates that you are heavily overerweight, so you may need to lose some weight for health."
      );
      setButton("/Overweight");
      setRange(data);
    }
  };

  return (
    <>
      <div
        className="pb-2"
        style={
          BMI > 0 && BMI < 18
            ? {
                height: "100vh",
                background: "linear-gradient(to bottom,#c468cc,#195eff )",
              }
            : BMI > 18 && BMI <= 25
            ? {
                height: "100vh",
                background: "linear-gradient(to bottom, #1eeb4a, #0b76e0)",
              }
            : BMI > 25 && BMI <= 30
            ? {
                height: "100vh",
                background: "linear-gradient(to bottom, #ffee00, #c71f0c)",
              }
            : BMI > 30
            ? {
                height: "100vh",
                background: "linear-gradient(to bottom, #ff0831, #ffc500)",
              }
            : {
                height: "100vh",
                background: "linear-gradient(to bottom, #195eff, #c468cc)",
              }
        }
      >
        {BMI ? (
          <ResultBMI
            BMI={BMI}
            BMIstatus={BMIstatus}
            className={className}
            range={range}
            advice={advice}
            button={button}
          />
        ) : (
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        )}

        <CalculateBMI
          setHeightUnit={(val) => {
            console.log(val);
            setHeightUnit(val);
          }}
          setWeightUnit={(val) => {
            console.log(val);
            setWeightUnit(val);
          }}
          setHeight={setHeight}
          setWeight={setWeight}
          height={height}
          weight={weight}
          calcBMI={calcBMI}
        />
        <InfoModal />
      </div>

      <Introduction cardRow={cardRow} setCardRow={setCardRow} />
    </>
  );
};
export default BMICalculator;
