import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Normalweight from "./Advice/Normalweight/Normalweight";
import Underweight from "./Advice/Underweight/Underweight";
import Overweight from "./Advice/Overweight/Overweight";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import BMICalculator from "./Components/BMICalculator";
function App() {
  const [activeMenu, setactiveMenu] = useState("BMICalculator");

  return (
    <div>
      <Router>
        <Navbar activeMenu={activeMenu} setactiveMenu={setactiveMenu} />
        <Switch>
          <Route exact path="/BMICalculator">
            <BMICalculator />
          </Route>
          <Route exact path="/Underweight">
            <Underweight />
          </Route>
          <Route exact path="/Normalweight">
            <Normalweight />
          </Route>
          <Route exact path="/Overweight">
            <Overweight />
          </Route>
          <Route exact path="/Introduction">
            <Introduction />
          </Route>
          <Route exact path="/AboutUs">
            <AboutUs />
          </Route>
          <Footer />
        </Switch>
        <Footer activeMenu={activeMenu} setactiveMenu={setactiveMenu} />
      </Router>
    </div>
  );
}
export default App;
