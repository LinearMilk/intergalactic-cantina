import React from 'react';
import { Link } from 'react-router-dom';
import './Teaser.css';

class Teaser extends React.Component {
  render() {
    const {image, title, description, link} = this.props
    return (
      <div className='teaser-container'>
        <img className='teaser-image' src={`./img/teaser/${image}`} alt={title} />
        <p>{description}</p>
        <Link to={link} className='teaser-link'>{title}</Link>
      </div>
    )
  }
}

export default Teaser;