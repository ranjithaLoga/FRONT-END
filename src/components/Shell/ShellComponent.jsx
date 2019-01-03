import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomeComponent from "../Home/HomeComponent";
import StylistProfileComponent from "../Stylist/StylistProfileComponent";
import StylistDashboardComponent from "../Stylist/StylistDashboardComponent";
import NavComponent from "../Nav/NavComponent";
import LoginComponent from "../Auth/LoginComponent";
import SignupTypeComponent from "../Auth/SignupTypeComponent";
import StylistRegisterComponent from "../Auth/StylistRegisterFormComponent";
import SalonRegisterComponent from "../Auth/SalonRegisterComponent";

class ShellComponent extends Component {
  state = {
    auth: {
      loggedin: true
    }
  };

  render() {
    return (
      <div>
        <NavComponent />
        <div className="container shell">
          <Switch>
            <Route
              path="/login"
              render={() => {
                return <LoginComponent />;
              }}
            />

            <Route
              path="/signup/stylist"
              render={() => {
                return <StylistRegisterComponent />;
              }}
            />
             <Route
              path="/signup/salon"
              render={() => {
                return <SalonRegisterComponent />;
              }}
            />

            <Route
              path="/signup/select"
              render={() => {
                return <SignupTypeComponent />;
              }}
            />

            <Route
              path="/home"
              render={() => {
                return <HomeComponent />;
              }}
            />

            <Route
              path="/stylist/:id/dashboard"
              exact
              render={() => {
                return <StylistDashboardComponent />;
              }}
            />

            <Route
              path="/stylist/:id"
              exact
              render={() => {
                return <StylistProfileComponent />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ShellComponent;
