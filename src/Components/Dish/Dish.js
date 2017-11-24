import React from 'react';
import './Dish.css';

class Dish extends React.Component {
  render (){
    const {subcategory, content} = this.props

    return (
      <div className='dish-container'>
        <div className='dish-info text-capitalize'>
            <div className='dish-name'>{subcategory} </div>
            <div className='dish-price'>{content[0].name}</div>
        </div>

        <ul className="list-inline">

        </ul>
      </div>
    )
  }
}

export default Dish;
