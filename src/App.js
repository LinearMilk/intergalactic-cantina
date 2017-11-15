import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import InfoAndHistory from './Components/InfoAndHistory/InfoAndHistory';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <div>
            <Route exact path="/" component={Main}/>
            <Route path="/history" component={InfoAndHistory}/>
            <Route exact path="*" component={Main}/>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
