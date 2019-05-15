import React, {Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBHamburgerToggler } from 'mdbreact';
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
      <MDBNavbar className="nav-container">
          <MDBNavbarBrand className="navbar-brand" href="/">
            Coding Jobs
          </MDBNavbarBrand>
          <MDBHamburgerToggler id="hamburger1" onClick={()=> this.toggleSingleCollapse('collapse1')} />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink className="nav-link" to="/login">Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="nav-link" to="/saved">Saved Jobs</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="nav-link" to="/resources">Resources</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
      </MDBNavbar>
    
    );
  }
}

export default NavbarPage;