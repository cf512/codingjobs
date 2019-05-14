import React, { Component } from "react";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import PrivacyInfo from "../components/PrivacyInfo";
import Footer from "../components/Footer";

class Privacy extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <PrivacyInfo />
        <Footer />
      </div>
    );
  }
}

export default Privacy;