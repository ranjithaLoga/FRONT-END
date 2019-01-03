import React, { Component } from "react";
import axios from "axios";

import { BASE_URL } from "../../config";

class SalonRegisterComponent extends Component {
  constructor() {
    super();

    this.state = {
      // user: {},
      salons: [],
      salonName: "",
      salonReg: "",
      salonLocation: "",
      salonNumber: "",
      user: [],
      userName: "",
      userPassword: "",
      isRegitering: false
    };
  }

  componentWillMount() {
    // // const userId = this.props.match.params.id;
    // axios.get(`${BASE_URL}/stylist/${userId}`).then(res => {
    //   if (res.data.length) {
    //     this.setState({ user: res.data[0] });
    //   }
    // });
  }

  handleChange = (name, e) => {
    this.setState({ [name]: e.target.value });
  };

  addSalon = () => {
    // if (this.state.bookingDate === "") {
    //   return;
    // }

    const {
      salonName,
      salonReg,
      salonLocation,
      salonNumber
      // userName,
      // userPassword
    } = this.state;

    this.setState({
      salons: [
        ...this.state.salon,
        {
          name: salonName,
          location: salonReg,
          service: salonLocation,
          session: salonNumber
        }
      ]
      // user: [
      //   ...this.state.user,
      //   {
      //     name: userName,
      //     password: userPassword
      //   }
      // ]
    });
  };

  register = async () => {
    this.setState({ isRegitering: true });

    for (let salon of this.state.salons) {
      let res = await axios.post(`${BASE_URL}/salon/add`, {
        ...salon
      });
      console.log("salon data");
      console.log(res.data);
    }

    this.setState({ isRegitering: false });
    alert("Salon added");
  };
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-5">
          <form action="">
            <div className="card">
              <div className="card-content has-text-centered ">
                <h3 className="title is-3">Register as a Salon</h3>
                <div className="columns is-multiline">
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          placeholder="Name"
                          onChange={e => {
                            this.handleChange("salonName", e);
                          }}
                          value={this.state.salonName}
                          className="input"
                          type="text"
                          // name=""
                          // id=""
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Username"
                          // placeholder="Name"
                          onChange={e => {
                            this.handleChange("userName", e);
                          }}
                          value={this.state.userName}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="password"
                          className="input"
                          placeholder="Password"
                          onChange={e => {
                            this.handleChange("userPassword", e);
                          }}
                          value={this.state.userPassword}
                        />
                      </div>
                    </div>
                  </div> */}
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          // type= "text" pattern="[0-9]*"
                          // className="input"
                          placeholder="Registration Number"
                          onChange={e => {
                            this.handleChange("salonReg", e);
                          }}
                          value={this.state.salonReg}
                          className="input"
                          type="text"
                          // name="salonReg"
                          // id="salonReg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          placeholder="Location"
                          onChange={e => {
                            this.handleChange("salonLocation", e);
                          }}
                          value={this.state.salonLocation}
                          className="input"
                          type="text"
                          // name="salonLoc"
                          // id="salonLoc"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          // type="text"
                          // className="input"
                          placeholder="Number"
                          onChange={e => {
                            this.handleChange("salonNumber", e);
                          }}
                          value={this.state.salonNumber}
                          className="input"
                          type="text"
                          pattern="[0-9]*"
                          // name="salonNum"
                          // id="salonNum"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="column is-full">
                    <button
                      onClick={this.register}
                      className={`button is-dark is-pulled-right ${
                        this.state.isRegitering ? "is-loading" : ""
                      } `}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SalonRegisterComponent;
