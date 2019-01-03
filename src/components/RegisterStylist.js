"use strict";

import React, { Component } from "react";
import axios from "axios";
import AddStylist from "../container/Stylist/RegisterStylist";
import Register from "../container/Stylist/StylistTable";

export default class RegisterStylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stylists: []
    };
    this.getAllStylists();
  }

  getAllStylists() {
    axios.get("http://localhost:3006/stylist/list").then(res => {
      this.setState({
        stylists: res.data.data
      });
      console.log("aaaa", res.data);
    });
  }

  addStylist(data) {
    axios
      .post("http://localhost:3006/stylist/add", {
        name: data.name,
        location: data.location,
        number: data.number,
        experiance: data.experiance
      })
      .then(result => {
        if (result.status == 200) {
          console.log("ADDED STYLIST!");
        }
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <div className="mydesign2">
        <h2>REGISTER STYLIST </h2>
        <hr />
        <AddStylist addStylist={data => this.addStylist(data)} />
        {/* <Register
          stylists={this.state.stylists}
          getAllStylists={() => this.getAllStylists()}
        /> */}
      </div>
    );
  }
}
