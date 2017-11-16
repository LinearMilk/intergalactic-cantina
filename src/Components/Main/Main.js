import React, { Component } from 'react';
import './Main.css';
import StaffList from '../StaffList/StaffList';
import LunchDishList from '../LunchDishList/LunchDishList';
import DinnerDishList from '../DinnerDishList/DinnerDishList';


class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            
          </div>
          <div className="col-md-5">
            <StaffList />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
