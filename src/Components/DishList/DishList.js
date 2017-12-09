import React from 'react';
import './DishList.css';
import Dish from '../Dish/Dish';
import dinnerDishes from './dinnerDishes';
import snacks from './snacks';
import beverages from './beverages';


class DishList extends React.Component {

  render (){
    let dishes =[];
    let title = '';
    switch (this.props.type) {
      case 'snacks':
        dishes = snacks;
        title = 'Superb Snacks';
        break;
      case 'dinner':
        dishes = dinnerDishes;
        title = 'Delightful Dinners';
        break;
      case 'beverages':
        dishes = beverages;
        title = 'Beverages';
        break;
      default:
        break;
  }

  return (
    <div className='dishList'>
      <h1 className='text-capitalize'>{title}</h1>
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
