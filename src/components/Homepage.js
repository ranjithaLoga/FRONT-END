import React, { Component } from "react";
import axios from "axios";
import SearchStylist from "../container/StylistView/SearchStylist";
import View from "../container/StylistView/StylistTable";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stylists: []
    };
  }

  searchStylist(data) {
    axios
      .get("", {
        date: data.date,
        session: data.session,
        service: data.service,
        location: data.location
      })
      .then(res => {
        this.setState({
          stylists: res.data.data
        });
      });
  }

  render() {
    return (
      <div className="mydesign2">
        <h2> STYLISTS</h2>
        <SearchStylist
          searchStylist={(date, session, service, location) =>
            this.searchStylist(date, session, service, location)
          }
        />
        <View stylists={this.state.stylists} />
      </div>
    );
  }
}
