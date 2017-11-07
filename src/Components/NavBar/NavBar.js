import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Intergalactic Diner</a>
            </div>
            <div className="nav navbar-right always-open">
              <span className="neon">Always open!</span>
            </div>
          </div>
        </nav>
        <div className="hero-image"></div>
      </div>
    )
  }
}

export default NavBar;
