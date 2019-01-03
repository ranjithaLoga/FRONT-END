"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class StylistView extends Component {
  static get PropTypes() {
    return {
      stylist: PropTypes.object,
      getAllStylist: PropTypes.func
    };
  }

  constructor(props) {
    super(props);
    this.stylist = this.props.stylist;
    this.getAllStylist = this.props.getAllStylist;
  }

  render() {
    return (
      <tr>
        <td> {this.stylist.id}</td>
        <td> {this.stylist.name}</td>
        <td> {this.stylist.location}</td>
        <td> {this.stylist.number} </td>
        <td> {this.stylist.experiance} </td>
      </tr>
    );
  }
}
