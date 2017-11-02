import React, { Component } from 'react';
import './App.css';
import DishList from './Components/DishList/DishList'
import StaffList from './Components/StaffList/StaffList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-7">
          <div>
            <h1>Lunch</h1>
          </div>

          <DishList />
        </div>

        <div className="col-md-5">
          <StaffList />
        </div>
        
      </div>
    );
  }
}

export default App;
