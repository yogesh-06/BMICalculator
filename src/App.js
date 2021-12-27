import Home from "./Components/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar";
import Normalweight from "./Advice/Normalweight/Normalweight";
import Underweight from "./Advice/Underweight/Underweight";
import Overweight from "./Advice/Overweight/Overweight";
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
        </Switch>
      </Router>
    </div>
  );
}
export default App;
