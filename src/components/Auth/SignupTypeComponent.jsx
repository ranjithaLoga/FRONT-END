import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

class SignupTypeComponent extends Component {
    render() {
        return (
            <div>
                <div className="columns is-centered has-text-centered sign-up-select is-vcentered">
                    <div className="column is-2">
                        <Link to="/signup/stylist">
                            <div className="card">
                                <div className="card-content">
                                    <div>
                                        <i className="fas fa-user-alt sign-up-select-icon"></i>
                                    </div>
                                    <h5 className="title is-5">Stylist</h5>
                                </div>
                            </div>

                        </Link>
                    </div>
                    <div className="column is-2">
                    <Link to="/signup/salon">
                        <div className="card">
                            <div className="card-content">
                                <div>
                                    <i className="fas fa-university sign-up-select-icon"></i>
                                </div>
                                <h5 className="title is-5">Salon</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupTypeComponent;