import React from 'react';
import './DinnerDishList.css';
import DishList from '../DishList/DishList';

class DinnerDishList extends React.Component {
  render (){
    return (
      <div className="container">
        <DishList type="dinner" />
      </div>
    )
  }
}

export default DinnerDishList;
