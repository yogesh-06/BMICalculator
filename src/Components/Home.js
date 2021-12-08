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
    console.log("Result:", data);
    console.log(range, "range");
    if (data < 18) {
      setBMIstatus("Underweight");
      setClassName("bg-primary");
      setRange(data);
    } else if (data > 18 && data <= 24) {
      setBMIstatus("Healthy weight");
      setRange(data);
      setClassName("bg-success");
    } else if (data > 24 && data <= 30) {
      setBMIstatus("Pre-obesity");
      setRange(data);
      setClassName("bg-warning");
    } else if (data > 30) {
      setBMIstatus("Overweight");
      setRange(data);
      setClassName("bg-danger");
    }
    // $("input[type='range']").change(function (e) {
    //   var value = $(e.target).val();
    //   if (value < 18) {
    //     $("#customRanges").css({ backgroundColor: "#AABBCC" });
    //   }
    // });
  };

  console.log("Result:", Math.round(BMI));

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #195eff, #8551da)",
        backgroundAttachment: "fixed",
      }}
    >
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
