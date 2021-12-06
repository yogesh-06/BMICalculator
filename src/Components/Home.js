import React, { useState } from "react";
import Navbar from "./Navbar";
import ResultBMI from "./ResultBMI";
import CalculateBMI from "./CalculateBMI";
const Home = () => {
  const [heightUnit, setHeightUnit] = useState();
  const [weightUnit, setWeightUnit] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [BMI, setBMI] = useState();

  const calculateBMI = (e) => {
    e.preventDefault();
    console.log(height, weight, heightUnit, weightUnit);
    if (heightUnit === "FeetAndInches") {
      setBMI(weight / (height / 3.2808) ** 2);
    } else if (heightUnit === "Centimetres") {
      setBMI(weight / (height / 100) ** 2);
    }
    console.log("Result:", Math.round(BMI));
  };

  return (
    <>
      <Navbar />

      <CalculateBMI
        setHeightUnit={setHeightUnit}
        setWeightUnit={setWeightUnit}
        setHeight={setHeight}
        setWeight={setWeight}
        height={height}
        weight={weight}
        calculateBMI={calculateBMI}
      />
      <ResultBMI BMI={BMI} />
    </>
  );
};
export default Home;
