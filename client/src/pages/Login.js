import React, { Component } from "react";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import LoginBtns from "../components/LoginBtns";
import Footer from "../components/Footer";

class Login extends Component {
  state = {
    
  }

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <LoginBtns />
        <Footer />
      </div>
    );
  }
}

export default Login;