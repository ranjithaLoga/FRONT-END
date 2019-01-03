import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Stylistinfo.css";
import axios from "axios";

import { BASE_URL } from "../../config";

class StylistProfileComponent extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      bookings: [],
      bookingDate: "",
      bookingLocation: "Seattle",
      bookingService: "stylist",
      bookingSession: "morning",
      bookingTotal: 0.0,
      isRegitering: false
    };
  }

  componentWillMount() {
    const userId = this.props.match.params.id;
    axios.get(`${BASE_URL}/stylist/${userId}`).then(res => {
      if (res.data.length) {
        this.setState({ user: res.data[0] });
      }
    });
  }

  handleChange = (name, e) => {
    this.setState({ [name]: e.target.value });
  };

  addBooking = () => {
    if (this.state.bookingDate === "") {
      return;
    }

    const {
      bookingDate,
      bookingLocation,
      bookingService,
      bookingSession
    } = this.state;

    this.setState(
      {
        bookings: [
          ...this.state.bookings,
          {
            date: bookingDate,
            location: bookingLocation,
            service: bookingService,
            session: bookingSession,
            price: 500
          }
        ]
      },
      () => {
        let total = this.state.bookings.reduce((pv, cv) => {
          return cv.price + pv;
        }, 0);

        this.setState({ bookingTotal: total });
      }
    );
  };

  register = async () => {
    this.setState({ isRegitering: true });

    for (let booking of this.state.bookings) {
      let res = await axios
        .post(`${BASE_URL}/booking/add`, {
          ...booking,
          stylist_id: this.state.user.id,
          salon_id: 1
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }

    this.setState({ isRegitering: false });
    alert("Bookings added");
  };

  render() {
    return (
      <div className="columns mt-20">
        <div className="column is-3">
          <div className="card">
            <div className="card-content">
              <div className="columns is-multiline">
                <div className="column is-full">
                  <h1 className="title is-marginless">
                    {this.state.user.name}
                  </h1>
                  <h2 className="sub-title is-marginless">Educator/Stylist</h2>
                </div>
                <div className="column is-full">
                  <img
                    className="image stylist-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeIObXdAXw-14KwplpB-QorevoqAhvuT6UgyVb-wdcYt5Tjpj"
                    alt="Stylist"
                  />
                </div>
                <div className="column is-full">
                  <div>
                    <ul>
                      <li>Experience: {this.state.user.experiance} years </li>
                      <li>Location: {this.state.user.location}</li>
                      <li>Contact: {this.state.user.number}</li>
                    </ul>
                  </div>
                </div>
                <div className="column is-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="column is-8">
          <div className="card">
            <div className="card-content">
              <div className="columns is-multiline">
                <div className="column is-full">
                  <h3 className="title is-3">Place your bookings</h3>
                </div>
                <div className="column">
                  <div className="columns">
                    <div className="column">
                      <div className="control">
                        <div className="field">
                          <input
                            onChange={e => {
                              this.handleChange("bookingDate", e);
                            }}
                            value={this.state.bookingDate}
                            className="input"
                            type="date"
                            name=""
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="control">
                        <div className="field">
                          <div
                            onChange={e => {
                              this.handleChange("bookingSession", e);
                            }}
                            value={this.state.bookingSession}
                            className="select is-fullwidth"
                          >
                            <select name="" id="">
                              <option value="morning">Morning</option>
                              <option value="afternoon">Afternoon</option>
                              <option value="evening">Evening</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <div className="control">
                        <div className="field">
                          <div className="select is-fullwidth">
                            <select
                              onChange={e => {
                                this.handleChange("bookingLocation", e);
                              }}
                              value={this.state.bookingLocation}
                              name=""
                              id=""
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
                    <div className="column">
                      <div className="control">
                        <div className="field">
                          <div className="select is-fullwidth">
                            <select
                              onChange={e => {
                                this.handleChange("bookingService", e);
                              }}
                              value={this.state.bookingService}
                              name=""
                              id=""
                            >
                              <option value="stylist">Stylist</option>
                              <option value="educator">Educator</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-1">
                      <button
                        onClick={this.addBooking}
                        className="button is-outlined"
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <table className="table is-fullwidth is-striped is-bordered is-hoverable">
                  <thead>
                    <tr>
                      <td>Booking Date</td>
                      <td>Session</td>
                      <td>Stylist/ Educator</td>
                      <td>Location</td>
                      <td>Charges</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.bookings.map(booking => {
                      return (
                        <tr>
                          <td>{booking.date}</td>
                          <td>{booking.session}</td>
                          <td>{booking.service}</td>
                          <td>{booking.location}</td>
                          <td>$500</td>
                        </tr>
                      );
                    })}

                    {this.state.bookings.length > 0 && (
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td className="is-dark">Total</td>
                        <td className="is-light">{this.state.bookingTotal}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <div className="column">
                  <button
                    onClick={this.register}
                    className={`button is-dark is-pulled-right ${
                      this.state.isRegitering ? "is-loading" : ""
                    } `}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StylistProfileComponent);
