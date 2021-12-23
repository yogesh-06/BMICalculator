import Home from "./Components/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overweight from "./Components/Overweight";
import Introduction from "./Components/Introduction";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
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
