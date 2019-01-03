import React from 'react';
import { Link } from 'react-router-dom';

import './Stylistinfo.css';

export default props => {
  const user = props.user;

  return <div className="card stylist">
      <div className="card-content">
        <div className="columns is-vcentered">
          <div className="column is-3">
                  <img className="image stylist-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxeIObXdAXw-14KwplpB-QorevoqAhvuT6UgyVb-wdcYt5Tjpj" alt="" />
          </div>
          <div className="column  is-4 stylist-info">
            <h4 className="title is-4">{user.name}</h4>
            <h5 className="sub-title is-5">{user.service}</h5>
            <h5 className="sub-title is-5">{user.location}</h5>
          </div>
          <div className="column is-5">
            <div className="stylist-charges">
              <table className="table is-bordered is-hoverable is-fullwidth">
                <thead>
                  <tr>
                    <td>Service</td>
                    <td>Charge per session</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{ user.service }</td>
                    <td>Rs.{user.amount}</td>
                  </tr>
                </tbody>
              </table>
              <Link to={{ pathname:`/stylist/${user.id}` }} className="button is-dark is-fullwidth">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
