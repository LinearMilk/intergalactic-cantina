import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import InfoAndHistory from './Components/InfoAndHistory/InfoAndHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/history" component={InfoAndHistory}/>
              <Route exact path="*" component={Main}/>
            </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
