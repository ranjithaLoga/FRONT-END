"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Stylist from "./StylistRow";
import axios from "axios";

export default class StylistTable extends Component {
  static get propTypes() {
    return {
      stylist: PropTypes.array
    };
  }

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      stylist: this.props.stylist
    };
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  getAllStylists() {
    axios.get("http://localhost:3006/stylist/list").then(res => {
      this.setState({
        stylists: res.data.data
      });
      console.log("aaaa", res.data);
    });
  }

  componentDidMount() {
    console.log(this.props);
    this.getAllStylists();
  }
  render() {
    const { stylist } = this.state;
    return (
      <div className="table">
        <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Location </th>
              <th> Number </th>
              <th> Experiance </th>
            </tr>
          </thead>
          <tbody>
            {/* {stylist.map(data => {
              return (
                <Stylist
                  key={data.id}
                  stylist={data}
                  getAllStylist={() => this.props.getAllStylist()}
                />
              );
            })} */}
          </tbody>
        </table>
      </div>
    );
  }
}
