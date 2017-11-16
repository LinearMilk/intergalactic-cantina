import React, { Component } from 'react';
import './Main.css';
import StaffList from '../StaffList/StaffList';
import TeaserList from '../TeaserList/TeaserList';


class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TeaserList />
          <StaffList />
        </div>
      </div>
    );
  }
}

export default Main;
