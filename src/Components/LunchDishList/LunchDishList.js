import React from 'react';
import './LunchDishList.css';
import DishList from '../DishList/DishList';

class LunchDishList extends React.Component {
  render (){
    return (
      <DishList type='lunch' />
    )
  }
}

export default LunchDishList;
