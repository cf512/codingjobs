import React, { Component } from 'react';
import { MDBNavbarToggler, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse } from 'mdbreact';
import "./style.css";

class NavbarPage extends Component {
  state = {
    collapse1: false,
    collapseID: ''
  }
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  render() {
    return (
      // <MDBNavbar className="nav-container navigation">
      //     <MDBNavbarBrand className="navbar-brand" href="/">
      //       Coding Jobs
      //     </MDBNavbarBrand>
      //     <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
      //       <MDBCollapse isOpen={this.state.collapse1} navbar>
      //         <MDBNavbarNav right>
      //           <MDBNavItem active>
      //             <MDBNavLink className="nav-link text-right" to="/login">Login</MDBNavLink>
      //           </MDBNavItem>
      //           <MDBNavItem>
      //             <MDBNavLink className="nav-link text-right" to="/saved">Saved Jobs</MDBNavLink>
      //           </MDBNavItem>
      //           <MDBNavItem>
      //             <MDBNavLink className="nav-link text-right" to="/resources">Resources</MDBNavLink>
      //           </MDBNavItem>
      //         </MDBNavbarNav>
      //       </MDBCollapse>
      // </MDBNavbar>
      <MDBNavbar color="info-color" dark expand="md">
              <MDBNavbarBrand className="navbar-brand" href="/">Coding Jobs</MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/saved">Saved Jobs</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/resources">Resources</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/login">Login</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;