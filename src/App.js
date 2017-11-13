import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import StaffList from './Components/StaffList/StaffList';
import LunchDishList from './Components/LunchDishList/LunchDishList';
import DinnerDishList from './Components/DinnerDishList/DinnerDishList';
import InfoAndHistory from './Components/InfoAndHistory/InfoAndHistory';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <LunchDishList />
            <DinnerDishList />
          </div>
          <div className="col-md-5">
            <StaffList />
          </div>
        </div>
      </div>
      <Footer />
      <InfoAndHistory />
    </div>
    );
  }
}

export default App;
