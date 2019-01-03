"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class StylistRow extends Component {
  static get propTypes() {
    return {
      stylist: PropTypes.object,
      searchStylist: PropTypes.func
    };
  }

  constructor(props) {
    super(props);
    this.stylist = this.props.stylist;
    this.searchStylist = this.props.searchStylist;
  }

  render() {
    return (
      <tr>
        <td>{this.stylist.name}</td>
        <td>{this.stylist.location}</td>
        <td>{this.stylist.number}</td>
        <td>{this.stylist.experiance}</td>
        <td>
          <button onClick={e => this.getStylist(this.patient.id)}>
            {" "}
            View{" "}
          </button>{" "}
        </td>
      </tr>
    );
  }
}
