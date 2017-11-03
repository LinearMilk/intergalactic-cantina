import React from 'react';
import './DishList.css';
import Dish from '../Dish/Dish';
import dinnerDishes from './dinnerDishes';
import lunchDishes from './lunchDishes';


class DishList extends React.Component {

  render (){
    let dishes = (this.props.type==='lunch') ? lunchDishes : dinnerDishes;
    return (
      <div className='dishList'>
        <h1 className='text-capitalize'>{this.props.type} menu </h1>
        {(dishes.length) ? dishes.map((dish, i) =>
          <Dish key={i}
                name={dish.name}
                price={dish.price}
                description={dish.description} />
        ) : <p>No Dishes</p>
        }
      </div>
    )
  }
}

export default DishList;
