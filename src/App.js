import React, { Component } from 'react';
import './App.css';
import DishList from './Components/DishList/DishList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-6">
          <div>Lunch</div>

          <DishList />
        </div>

        <div className="col-md-6">
          <p>Our Staff</p>
        </div>
        
      </div>
    );
  }
}

export default App;
