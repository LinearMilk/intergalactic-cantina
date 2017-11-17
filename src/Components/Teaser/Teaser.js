import React from 'react';
import { Link } from 'react-router-dom';
import './Teaser.css';

class Teaser extends React.Component {
  render() {
    const {image, title, description, link} = this.props
    return (
      <Link to={link} className='teaser-link-div'>
        <div className='teaser-container'>
          <img className='teaser-image' src={`./img/teaser/${image}`} alt={image} />
          <p>{description}</p>
          <Link to={link} className='teaser-link'>Se our {title}</Link>
        </div>
      </Link>
    )
  }
}

export default Teaser;