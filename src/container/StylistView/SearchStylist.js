"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
//import Calendar from "react-calendar-component";
import DatePicker from "react-datepicker";

export default class MyStylist extends Component {
  static get proptypes() {
    return {
      date: PropTypes.date,
      session: PropTypes.session,
      service: PropTypes.service,
      location: PropTypes.location
    };
  }

  constructor(props) {
    super(props);
  }

  onDateChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.date = event.target.value;
  }

  onSessionChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.session = event.target.value;
  }

  onServiceChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.service = event.target.value;
  }

  onLocationChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.location = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.searchStylist(
      this.date,
      this.session,
      this.service,
      this.location
    );
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={event => this.onSubmit(event)}>
          <div>
            <DatePicker onChange={event => this.onDateChange(event)} />
          </div>
          <div>
            <label> Session </label>
          </div>
          <select onChange={event => this.onSessionChange(event)}>
            <option value="none"> Select Session </option>
            <option value="Morning">Morning(8-11AM) </option>
            <option value="Afternoon">Afternoon(1.30-4PM) </option>
            <option value="Evening">Evening(6-8PM) </option>
          </select>
          <div />
          <label> Service </label> <div />
          <select onChange={event => this.onServiceChange(event)}>
            <option value="none"> Select Service </option>
            <option value="Stylist">Stylist </option>
            <option value="Educator">Educator </option>
          </select>
          <div />
          <label> location </label>
          <div />
          <input type="text" onChange={event => this.onLocationChange(event)} />
          <div />
          <button type="submit"> Search </button>
        </form>
      </div>
    );
  }
}
