"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import Stylist from "./StylistRow";

export default class StylistTable extends Component {
  static get propTypes() {
    return {
      stylists: PropTypes.array
    };
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  render() {
    this.stylists = this.props.stylists;
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>LOCATION</th>
              <th>EXPERIANCE</th>
              <th>SESSION</th>
              <th>CHARGES</th>
              <th>ViewProfile </th>
            </tr>
          </thead>
          <tbody>
            {this.stylists.map(data => {
              return (
                <Stylist
                  key={data.id}
                  patient={data}
                  getAllStylists={() => this.props.getAllStylists()}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
