import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import ShellComponent from "./components/Shell/ShellComponent";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="base">
          <Route
            path="/"
            render={() => {
              return <ShellComponent />;
            }}
          />
          {/* <Redirect from='*' to='/home' /> */}
        </div>
      </Router>
    );
  }
}
