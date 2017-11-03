import React from 'react';
import './Staff.css';

class Staff extends React.Component {
  render (){
    const {thumbnail, name, title, description} = this.props
    return (
      <div className='staff-container'>
        <div className='staff-image media-left'>
          <img className="thumbnail media-object" src={`./img/staff/${thumbnail}`} alt={name} />
        </div>
        <div className='staff-info media-body'>
          <h5 className='staff-title'>{title}</h5>
          <p>{name}</p>
          <p className='staff-description'>"{description}"</p>
        </div>
      </div>
    )
  }
}

export default Staff;
