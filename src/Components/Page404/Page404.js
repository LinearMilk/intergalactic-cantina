import React, { Component } from 'react';
import './Page404.css';

class Page404 extends Component {
  render(){
    return (
      <div className="container">
        <div className='error-header'>
          <h1>Oops, you ended up at the wrong spacetime coordinates. (#404) </h1>
          <img className="image-404" src="./img/404/marvin_42.png" alt="marvin the paranoid android"/>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

export default Page404;
