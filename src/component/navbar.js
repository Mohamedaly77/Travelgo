import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/cover.png";

class NavBar extends Component {
  render() {
    return (
      <nav className=" navbar text-white-50 sticky-top navbar-expand-lg  fs-4 ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img className="logo" src={logo} alt=""></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-white-50"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>

              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
              <NavLink className="nav-link sine" to="/Sineup">
                Sine up
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
