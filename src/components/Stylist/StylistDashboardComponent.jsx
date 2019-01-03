import React, { Component } from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

import "./Stylistinfo.css";
import CalendarComponent from "../Calendar/CalendarComponent";

import { BASE_URL } from "../../config";

class StylistDashboardComponent extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      isLoading: true
    };
  }

  componentWillMount() {
    // const userId = this.props.match.params.id;
    const userId = 1;

    // Axios.get(`${BASE_URL}/stylist/${userId}`).then(res => {
    Axios.get(`${BASE_URL}/stylist/1`).then(res => {
      if (res.data.length) {
        this.setState({ user: res.data[0] });
      }
    });

    // Axios.get(`${BASE_URL}/bookings/stylist/${userId}`).then(res => {
    Axios.get(`${BASE_URL}/bookings/stylist/1`).then(res => {
      // this.setState({ bookings: res.data });
      // console.log("bookings");
      // console.log(res.data);
      // let bookings = res.data[0];
      // console.log(bookings);
      // console.log(bookings);
      this.setState({ bookings: res.data[0], isLoading: false });
      // this.setState(bookings, () => {
      console.log(this.state);
      // });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <div>Wait</div>;
    }
    return (
      // <div className="columns is-multiline">
      //   <div className="column is-3 is-offset-5">
      //     <div>
      //       <img
      //         className="image stylist-img"
      //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeIObXdAXw-14KwplpB-QorevoqAhvuT6UgyVb-wdcYt5Tjpj"
      //         alt="Stylist"
      //       />
      //       <h3 className="title is-3">{this.state.user.name}</h3>
      //       {/* <a href="#">Edit Profile</a> */}
      //     </div>
      //   </div>
      //   <div className="column is-4" />
      //   <div className="column is-4">
      //     <div className="card">
      //       <div className="card-content">
      //         {/* <h4 className="title is-4 has-text-centered">Your Calender</h4> */}
      //         <div className="columns is-multiline is-centered">
      //           {/* <div className="column is-12 ">
      //             <CalendarComponent />
      //           </div> */}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
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
        {/* ends */}
        <div className="column">
          <div className="card">
            <div className="card-content">
              <h4 className="title is-4"> Bookings</h4>
              <table className="table is-bordered is-hoverable is-fullwidth ">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Salon</th>
                    <th>Session</th>
                    <th>Job</th>

                    {/* <th>Accept/Deny</th> */}
                  </tr>
                </thead>
                <tbody>
                  {this.state.bookings.map(booking => {
                    return (
                      <tr key={booking.id}>
                        {/* <td>{new Date(booking.date).toDateString()}</td> */}
                        <td>{booking.id}</td>
                        <td>{booking.date}</td>
                        <td>{booking.location}</td>
                        <td>{booking.name}</td>
                        <td>{booking.session}</td>
                        <td>{booking.service}</td>

                        {/* <td>
                          <div className="buttons">
                            <button className="button is-dark is-small">
                              Accept
                            </button>
                            <button className="button is-danger is-small">
                              Deny
                            </button>
                          </div>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StylistDashboardComponent);
