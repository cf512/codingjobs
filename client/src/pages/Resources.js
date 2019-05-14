import React, { Component } from "react";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import Links from "../components/Links";
import Footer from "../components/Footer";

class Resources extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Links />
        <Footer />
      </div>
    );
  }
}

export default Resources;