"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RegisterSalon extends Component {
  static get propTypes() {
    return {
      addSalon: PropTypes.func,
      name: PropTypes.string,
      reg_No: PropTypes.string,
      location: PropTypes.string,
      number: PropTypes.number,
      mobile_number: PropTypes.number
    };
  }

  constructor(props) {
    super(props);
  }

  onNameChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.name = event.target.value;
  }

  onReg_NoChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.reg_No = event.target.value;
  }

  onLocationChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.location = event.target.value;
  }

  onNumberChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.number = event.target.value;
  }

  onMobileNumberChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.mobile_number = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.addPatient({
      name: this.name,
      reg_No: this.reg_No,
      location: this.location,
      number: this.number,
      mobile_number: this.mobile_number
    });
  }

  render() {
    return (
      <div class="form">
        <form onSubmit={event => this.onSubmit(event)}>
          <label> Name </label>
          <div />
          <input type="text" onChange={event => this.onNameChange(event)} />
          <div />
          <label> Registration Number</label>
          <div />
          <input type="text" onChange={event => this.onReg_NoChange(event)} />
          <div />
          <label> Location </label>
          <div />
          <input type="text" onChange={event => this.onLocationChange(event)} />
          <div />
          <label> Contact Number </label>
          <div />
          <input type="number" onChange={event => this.onNumberChange(event)} />
          <div />
          <label> Mobile Number </label>
          <div />
          <input
            type="number"
            onChange={event => this.onMobileNumberChange(event)}
          />
          <div />
          <button type="Submit"> ADD </button>
        </form>
      </div>
    );
  }
}
