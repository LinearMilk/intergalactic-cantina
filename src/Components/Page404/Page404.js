import React, { Component } from 'react';
import './Page404.css';

class Page404 extends Component {
  render(){
    return (
      <div className="container">
        <div className='error-header'>
          <h1>Oops, you ended up at the wrong (404) spacetime coordinates.  </h1>
          <h4>Here&#39;s an inspirational quote from Marvin to cheer you up:</h4>
          <h3>The first ten million years were the worst. And the second ten million: they were the worst, too. The third ten million I didn&#39;t enjoy at all. After that, I went into a bit of a decline.</h3>
          <img className="image-404" src="./img/404/marvin.jpg" alt="marvin the paranoid android"/>
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

export default Page404;