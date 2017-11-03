import React from 'react';
import './Dish.css';

class Dish extends React.Component {
  render (){
    const {name, price, description} = this.props
    return (
      <div className='dish-container'>
        <p className='text-capitalize'>{name} <strong>{price}</strong></p>
        <p>{description}</p>
      </div>
    )
  }
}

export default Dish;
