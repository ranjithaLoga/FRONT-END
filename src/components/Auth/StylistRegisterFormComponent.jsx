import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class StylistRegisterComponent extends Component {



  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-5">
          <form action="">
            <div className="card">
              <div className="card-content has-text-centered ">
                <h3 className="title is-3">Register as a stylist</h3>
                <div className="columns is-multiline">
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Username"
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
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Location"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                      <input
                          type="text"
                          className="input"
                          placeholder="Experiance in years"
                        />
                      </div>
                    </div>
                  </div>
                  <label className="">Stylist Charges</label>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Morning"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Afternoon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Evening"
                        />
                      </div>
                    </div>
                  </div>
                  <label>Educator Charges</label>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Morning"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Afternoon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="column is-full">
                    <div className="control">
                      <div className="field">
                        <input
                          type="text"
                          className="input"
                          placeholder="Evening"
                        />
                      </div>
                    </div>
                  </div>
                 
                  <div className="column is-full">
                    <button className="button is-dark is-fullwidth">
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

export default StylistRegisterComponent;
