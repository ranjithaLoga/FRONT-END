import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

class NavComponent extends Component {
  state = {};
  render() {
    return (
      <nav className="level">
        <div className="level-left">
          <div className="title">salONE1</div>
        </div>

        <div className="level-right">
          <p className="level-item">
            <Link to="/home">Home</Link>
          </p>
          <p className="level-item">
            <Link to="/stylist/1/dashboard">Dashboard</Link>
          </p>
          <p className="level-item">
            <Link to="/login" className="button is-dark is-outlined">
              Login/Signup
            </Link>
          </p>
        </div>
      </nav>
    );
  }
}

export default NavComponent;
