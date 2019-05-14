import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Saved from "./pages/Saved";
import Resources from "./pages/Resources";
import ToS from "./pages/ToS";

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/tos" component={ToS} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
