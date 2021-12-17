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
  const [range, setRange] = useState(18);
  // const [alert, setAlert] = useState(false);

  const calculateBMI = (height, weight) => {
    console.log(height, weight, heightUnit, weightUnit);
    setBMI(null);
    let data;
    if (heightUnit === "FeetAndInches") {
      data = weight / (height / 3.2808) ** 2;
      setBMI(weight / (height / 3.2808) ** 2);
    } else if (heightUnit === "Centimetres") {
      setBMI(weight / (height / 100) ** 2);
      data = weight / (height / 100) ** 2;
    }
    console.log("Result:", data);
    console.log("Range", range);

    if (data < 18) {
      setBMIstatus("Underweight");
      setClassName("bg-primary");
      setRange(data);
    } else if (data > 18 && data <= 25) {
      setBMIstatus("Healthy weight");
      setClassName("bg-success");
      setRange(data);
    } else if (data > 25 && data <= 30) {
      setBMIstatus("Pre-obesity");
      setClassName("bg-warning");
      setRange(data);
    } else if (data > 30) {
      setBMIstatus("Overweight");
      setClassName("bg-danger");
      setRange(data);
    }

    // if (weight == "" || height == "") {
    //   setAlert(true);
    //   setTimeout(() => {
    //     setAlert(false);
    //   }, 3000);
    // }
  };

  //  ||
  //       (heightUnit === "FeetAndInches" && height >= 10) ||
  //       (heightUnit === "Centimetres" && height >= 200)

  console.log("Result:", Math.round(BMI));

  return (
    <div>
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

      <ResultBMI
        BMI={BMI}
        BMIstatus={BMIstatus}
        className={className}
        range={range}
        setRange={setRange}
      />
    </div>
  );
};
export default Home;
