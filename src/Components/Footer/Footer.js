import React from 'react';
import './Footer.css';

class Footer extends React.Component {
render(){
  return (
    <footer>
      <div className="container">
        <h1>Where to Find Us</h1>
        <p>Antennae Galaxies (NGC 4038/NGC 4039), Corvus constellation.</p>
        <div className="row link" data-toggle="modal" data-target="#exampleModal">
          See our location on a map
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <p>Antennae Galaxies (NGC 4038/NGC 4039), Corvus constellation.</p>
                <img src="img/2xcluster.jpg" alt="galaxy map"/>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </footer>
  )
}
}

export default Footer;
