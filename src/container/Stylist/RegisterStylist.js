"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RegisterStylist extends Component {
  static get propTypes() {
    return {
      addStylist: PropTypes.func,
      name: PropTypes.string,
      location: PropTypes.string,
      number: PropTypes.number,
      experiance: PropTypes.number
    };
  }

  constructor(props) {
    super(props);
  }

  onNameChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.number = event.target.value;
  }

  onNumberChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.number = event.target.value;
  }

  onLocationChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.location = event.target.value;
  }

  onExperianceChange(event) {
    event.preventDefault();
    event.stopPropagation();
    this.experiance = event.target.value;
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    this.props.addStylist({
      name: this.name,
      location: this.number,
      number: this.number,
      experiance: this.experiance
    });
  }

  render() {
    return (
      <div class="form">
        <form onSubmit={event => this.onSubmit(event)}>
          <label> Name :</label>
          <div />
          <input type="text" onChange={event => this.onNameChange(event)} />
          <div />
          <label> Location :</label>
          <div />
          <input type="text" onChange={event => this.onLocationChange(event)} />
          <div />
          <label> Number : </label>
          <div />
          <input type="number" onChange={event => this.onNumberChange(event)} />
          <div />
          <label> Experiance :</label>
          <div />
          <input
            type="number"
            onChange={event => this.onExperianceChange(event)}
          />
          <div />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}
