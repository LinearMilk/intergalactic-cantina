import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <Link to="/" >
              <div className="brand">
                <h1 className="brand-name">Cantina</h1>
                <p className="brand-info text-uppercase">Intergalactic fine dining</p>
              </div>
            </Link>
          </div>
        </nav>
        <div className="hero-image"></div>
      </div>
    )
  }
}

export default NavBar;
