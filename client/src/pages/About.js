import React, { Component } from "react";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import AboutComponent from "../components/AboutComponent";
import Footer from "../components/Footer";

class About extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <AboutComponent />
        <Footer />
      </div>
    );
  }
}

export default About;