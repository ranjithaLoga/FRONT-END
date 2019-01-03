import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default class LoginComponent extends Component {
  render() {
    return (
      <div>
        <div className="columns">
            <div className="column">
                <div className="card">
                    <div className="card-content">
                        <h1 className="title is-3">Sign In</h1>
                        <div className="columns is-multiline">
                            <div className="column is-full">
                                <form action="" className="form login-form">
                                    <div className="control">
                                        <div className="field"><input type="text" className="input" placeholder="Username" /></div>
                                    </div>
                                    <div className="control">
                                        <div className="field"><input type="password" className="input" placeholder="Password" /></div>
                                    </div>
                                    <div className="control">
                                        <div className="field">
                                            <button className="button is-dark is-outlined">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <hr className="hr" />
                            <div className="column">
                                <label htmlFor="" className="label" >New to stylist finder?</label>
                                <Link className="button is-secondary" to="/signup/select">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
