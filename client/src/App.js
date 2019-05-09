import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
        <Form />
        {/* <Card />
        <Card />
        <Card /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
