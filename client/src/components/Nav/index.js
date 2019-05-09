import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Coding Jobs</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={props.location === "/signin" || props.location === "/search" ? "nav-item active" : "nav-item"}>
            <a className="nav-link" id="signin" href="/signin">Sign-In</a>
          </li>
          <li className={props.location === "/saved" ? "nav-item active" : "nav-item" }>
            <a className="nav-link text-right" id="saved" href="/saved">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;