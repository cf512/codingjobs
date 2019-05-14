import React, { Component } from "react";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import {CardList, Card } from "../components/Card";
import Footer from "../components/Footer";

class Results extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Card />
        <Footer />
      </div>
    );
  }
}

export default Results;