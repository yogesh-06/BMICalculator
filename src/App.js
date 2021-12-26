import Home from "./Components/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overweight from "./Advice/Overweight";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import HealthRisk from "./Components/HealthRisk";
import Normalweight from "./Advice/Normalweight";
import Underweight from "./Advice/Underweight";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
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
          <Route exact path="/HealthRisk">
            <HealthRisk />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
