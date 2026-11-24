import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import ToS from "./pages/ToS";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/terms-of-service" component={ToS} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
