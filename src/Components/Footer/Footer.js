import React from 'react';
import './Footer.css';

class Footer extends React.Component {
render(){
  return (
    <footer>
      <div className="container">
        <h2>Where to Find Us</h2>
        <p>Antennae Galaxies (NGC 4038/NGC 4039), Corvus constellation.</p>
        <div className="row"><img src="img/2xcluster.jpg" alt="galaxy map"/></div>
      </div>
    </footer>
  )
}
}

export default Footer;
