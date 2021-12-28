import React, { useState } from "react";
// import Navbar from "./Navbar";
import ResultBMI from "./ResultBMI";
import CalculateBMI from "./CalculateBMI";
import InfoModal from "./InfoModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Introduction from "./Introduction";
const Home = () => {
  const [heightUnit, setHeightUnit] = useState("FeetAndInches");
  const [weightUnit, setWeightUnit] = useState();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState();
  const [BMIstatus, setBMIstatus] = useState("");
  const [className, setClassName] = useState("");
  const [advice, setAdvice] = useState("");
  const [range, setRange] = useState(18);
  const [button, setButton] = useState("");

  const calculateBMI = (height, weight) => {
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
          BMI < 18
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
          ""
        )}

        <CalculateBMI
          setHeightUnit={setHeightUnit}
          setWeightUnit={setWeightUnit}
          setHeight={setHeight}
          setWeight={setWeight}
          height={height}
          weight={weight}
          calculateBMI={calculateBMI}
        />
        <InfoModal />

        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </div>

      <Introduction />
    </>
  );
};
export default Home;
