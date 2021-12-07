import React, { useState } from "react";
import Navbar from "./Navbar";
import ResultBMI from "./ResultBMI";
import CalculateBMI from "./CalculateBMI";
import InfoModal from "./InfoModal";
// import Alerts from "./Alerts";
const Home = () => {
  const [heightUnit, setHeightUnit] = useState("FeetAndInches");
  const [weightUnit, setWeightUnit] = useState();
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState();
  const [BMIstatus, setBMIstatus] = useState("");
  const [className, setClassName] = useState("");
  // const [alert, setAlert] = useState(false);

  const calculateBMI = (height, weight) => {
    // e.preventDefault();
    setBMI(null);
    console.log(height, weight);
    console.log(height, weight, heightUnit, weightUnit);
    let data;
    if (heightUnit === "FeetAndInches") {
      data = weight / (height / 3.2808) ** 2;
      setBMI(weight / (height / 3.2808) ** 2);
    } else if (heightUnit === "Centimetres") {
      setBMI(weight / (height / 100) ** 2);
      data = weight / (height / 100) ** 2;
    }
    console.log("Result:", BMI);

    if (data < 18) {
      setBMIstatus("Underweight");
      setClassName("bg-primary");
    } else if (data > 18 && data <= 24) {
      setBMIstatus("Healthy weight");
      setClassName("bg-success");
    } else if (data > 24 && data <= 30) {
      setBMIstatus("Pre-obesity");
      setClassName("bg-warning");
    } else if (data > 30) {
      setBMIstatus("Overweight");
      setClassName("bg-danger");
    }
  };

  console.log("Result:", Math.round(BMI));

  return (
    <>
      <Navbar />
      {/* <Alerts /> */}
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
      <ResultBMI BMI={BMI} BMIstatus={BMIstatus} className={className} />
    </>
  );
};
export default Home;
