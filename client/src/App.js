import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Results from "./pages/Results";
// import Saved from "./pages/Saved";
import Resources from "./pages/Resources";
import ToS from "./pages/ToS";
// import Login from "./pages/Login";
// import Logout from "./pages/Logout";
import Privacy from "./pages/Privacy";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/results" component={Results} />
          <Route exact path="/saved" component={Saved} /> */}
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/terms-of-service" component={ToS} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} /> */}
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
