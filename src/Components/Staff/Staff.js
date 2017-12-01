import React from 'react';
import './Staff.css';

class Staff extends React.Component {
  render (){
    const {thumbnail, name, title, thumbnailalign} = this.props
    const left = (thumbnailalign === 'left');
    
    let staffalign = null;
    if(left) {
      staffalign = 'media-left';
    } else {
      staffalign = 'media-right';
    }
    
    
    let image = <div className={staffalign}>
        <img className='staff-picture' src={`./img/staff/${thumbnail}`} alt={name} />
      </div>;
    
    return (
      <div className='staff-container media'>
        {left ? image : ''}
        <div className='staff-info media-body'>
          <p className='staff-name'>{name}</p>
          <p className='staff-title'>{title}</p>
        </div>
        {!left ? image : ''}
      </div>
    )
  }
}

export default Staff;