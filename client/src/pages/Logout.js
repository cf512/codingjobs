import React, { Component } from "react";
import Nav from "../components/Nav"
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from "mdbreact";

class Saved extends Component {
  render() {
    return (
      <div>
        <Nav
          location={this.props.location.pathname}
        />
        <Jumbotron />
        <MDBCard style={{ width: "40rem" }}>
          <MDBCardBody>
            <MDBCardTitle className="text-center">You have successfully logged out</MDBCardTitle>
            <div className="text-center">
              <MDBBtn href="/" color="primary">Return Home</MDBBtn>
              <MDBBtn href="/" color="primary">Log Back In</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
        <Footer />
      </div>
    );
  }
}

export default Saved;