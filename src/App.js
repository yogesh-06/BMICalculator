import Home from "./Components/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Normalweight from "./Advice/Normalweight/Normalweight";
import Underweight from "./Advice/Underweight/Underweight";
import Overweight from "./Advice/Overweight/Overweight";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/BMICalculator">
            <Home />
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
        <Footer />
      </Router>
    </div>
  );
}
export default App;
