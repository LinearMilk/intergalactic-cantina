import React from 'react';
import './LunchDishList.css';
import DishList from '../DishList/DishList';

class LunchDishList extends React.Component {
  render (){
    return (
      <div className="container">
        <DishList type='lunch' />
      </div>
    )
  }
}

export default LunchDishList;
