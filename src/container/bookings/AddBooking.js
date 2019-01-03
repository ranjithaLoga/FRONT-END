"use strict";

import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default class AddBooking extends Component {
  static get propTypes() {
    return {
      AddBooking: PropTypes.func,
      date: PropTypes.date,
      location: PropTypes.location,
      salon_id: PropTypes.salon_id,
      stylist_id: PropTypes.stylist_id,
      session: PropTypes.session,
      service: PropTypes.service
    };
  }

  constructor(props) {
    super(props);
  }
}
