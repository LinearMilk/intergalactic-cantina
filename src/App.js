import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import InfoAndHistory from './Components/InfoAndHistory/InfoAndHistory';
import SnacksList from './Components/SnacksList/SnacksList';
import DinnerDishList from './Components/DinnerDishList/DinnerDishList';
import BeveragesList from './Components/BeveragesList/BeveragesList';
import Page404 from './Components/Page404/Page404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/history" component={InfoAndHistory}/>
            <Route path="/snacks" component={SnacksList}/>
            <Route path="/dinner" component={DinnerDishList}/>
            <Route path="/beverages" component={BeveragesList}/>
            <Route component={Page404}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
