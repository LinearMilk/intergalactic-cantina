import React from 'react';
import './Staff.css';

class Staff extends React.Component {
  render (){
    const {thumbnail, name, title, description} = this.props
    return (
      <div className='staff-container'>
        <div className='row'>
          <div className='col-xs-4 staff-image'>
            <img className="thumbnail" src={`./img/staff/${thumbnail}`} alt={name} />
          </div>
          <div className='col-xs-8'>
            <div className='staff-info'>
              <p><strong>{title}</strong></p>
              <p>{name}</p>
              <p>"{description}"</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Staff;
