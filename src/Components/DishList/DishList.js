import React from 'react';
import './DishList.css';
import Dish from '../Dish/Dish';
import dinnerDishes from './dinnerDishes';
import lunchDishes from './lunchDishes';
import beverages from './beverages';


class DishList extends React.Component {

  render (){
    let dishes =[];
    switch (this.props.type) {
      case 'lunch':
        dishes = lunchDishes;
        break;
      case 'dinner':
        dishes = dinnerDishes;
        break;
      case 'beverages':
        dishes = beverages;
        break;
      default:
        break;
  }

  return (
    <div className='dishList'>
      <h1 className='text-capitalize'>{this.props.type} menu </h1>
      {(dishes.length) ? dishes.map((dish, i) =>
        <Dish key={i}
              subcategory={dish.subcategory}
              content={dish.content} />
      ) : <p>No Dishes</p>
      }


    </div>
    )
  }
}

export default DishList;
