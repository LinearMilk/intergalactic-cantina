import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DishList from './Components/DishList/DishList'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to The Bitter Space</h2>
        </header>

        <DishList />
      </div>
    );
  }
}

export default App;
