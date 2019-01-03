import React, { Component } from "react";
import axios from "axios";

import StylistComponent from "../Stylist/StylistComponent";
import { BASE_URL } from "../../config";
import validations from 'react-validation';

class HomeComponent extends Component {
  constructor() {
    super();

    this.state = {
      search: {
        date: "",
        location: "choose",
        session: "",
        type: ""
      },
      results: [],
      noResults: false
    };
  }

  handleChange = (name, e) => {
    this.setState({ search: { ...this.state.search, [name]: e.target.value } });
  };

  doSearch = () => {
    const params = this.state.search;
    const url = `${BASE_URL}/stylist/search/${params.date}/${params.location}/${
      params.session
    }/${params.type}`;

    axios
      .get(url)
      .then(res => {
        if (res.data && res.data.task.length) {
          this.setState({ results: res.data.task, noResults: false });
        } else {
          this.setState({ noResults: true, results: [] });
        }
      })
      .catch(e => {
        console.error(e);
      });
  };

  render() {
    return (
      <div>
        <div className="columns">
          <div className="column">
            <h1 className="title">Find a Stylist</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-content">
                <h4 className="title is-5">Filter Preference</h4>
                <div className="columns is-multiline">
                  <div className="column">
                    <div className="control">
                      <div className="field">
                        <input
                          className="input"
                          onChange={e => {
                            this.handleChange("date", e);
                          }}
                          value={this.state.search.date}
                          type="date"
                          // validations={[required]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <div className="select is-fullwidth">
                          <select
                            onChange={e => {
                              this.handleChange("location", e);
                            }}
                            value={this.state.search.location}
                            // validations={[required]}
                          >
                            <option value="choose">Choose a location</option>
                            <option value="Seattle">Seattle</option>
                            <option value="New York">New York</option>
                            <option value="Times Square">Times Square</option>
                            <option value="Virginia">Virginia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <div className="select is-fullwidth">
                          <select
                            onChange={e => {
                              this.handleChange("session", e);
                            }}
                            value={this.state.search.session}
                            // validations={[required]}
                          >
                            <option value="choose">Choose a session</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <label className="radio">
                        <input
                          onClick={e => {
                            this.handleChange("type", e);
                          }}
                          value="stylist"
                          className="m-10"
                          type="radio"
                          name="answer"
                          // validations={[required]}
                        />
                        Stylist
                      </label>
                      <label className="radio">
                        <input
                          onChange={e => {
                            this.handleChange("type", e);
                          }}
                          value="educator"
                          className="m-10"
                          type="radio"
                          name="answer"
                          // validations={[required]}
                        />
                        Educator
                      </label>
                    </div>
                  </div>
                  <div className="column is-full">
                    <button
                      onClick={this.doSearch}
                      className="button is-fullwidth is-dark"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            {this.state.noResults && <h2>Sorry No Results found :(</h2>}

            {this.state.results.map(result => {
              return <StylistComponent user={result} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
