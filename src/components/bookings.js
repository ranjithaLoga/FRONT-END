"use strict";

import React, { Component } from "react";
import axios from "axios";
import AddBooking from "../container/bookings/AddBooking";
import Register from "../container/bookings/Bookings";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    };
  }

  addBooking(data) {
    axios
      .post("http://localhost:3005/booking/add", {
        date: data.date,
        location: data.location,
        salon_id: data.salon_id,
        stylist_id: data.stylist_id,
        session: data.session,
        service: data.service
      })
      .then(result => {
        if (result.status == 200) {
          alert("booking added succesfully");
        }
      })
      .catch(err => {
        console.log(err);
        alert("booking cannot be done !");
      });
  }

  render() {
    return (
      <div className="mydesign2">
        <h2> BOOKINGS </h2>
        <hr />
        <AddBooking addBooking={data => this.addBooking(data)} />
      </div>
    );
  }
}
