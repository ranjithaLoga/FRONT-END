"use strict";

import React, { Component } from "react";
import axios from "axios";
import AddSalon from "../container/Salon/RegisterSalon";
import Register from "../container/Salon/SalonTable";

export default class RegisterSalon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salons: []
    };
  }

  addSalon(data) {
    axios
      .post("http://localhost:3006//salon/add", {
        name: data.name,
        reg_No: data.reg_No,
        location: data.location,
        number: data.number,
        mobile_number: data.mobile_number
      })
      .then(result => {
        if (result.status == 200) {
          alert(" Salon Added");
        }
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <div className="mydesign2">
        <h2>REGISTER SALON</h2>
        <hr />
        <AddSalon addSalon={data => this.addSalon(data)} />
      </div>
    );
  }
}
