import React from 'react';
import { Link } from 'react-router-dom';
import './Teaser.css';

class Teaser extends React.Component {
  render() {
    const {image, title, description, link} = this.props
    
    const style = {
      backgroundImage: 'url("./img/teaser/'+image+'")'
    }
    
    return (
      <Link to={link} className='teaser-link-div'>
        <div className='teaser-container'>
          <div className='teaser-image' style={style}> </div>
          <p className='teaser-description'>{description}</p>
          <p className='teaser-link'>See our {title}</p>
        </div>
      </Link>
    )
  }
}

export default Teaser;