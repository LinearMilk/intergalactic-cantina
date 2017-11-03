import React from 'react';
import './DinnerDishList.css';
import DishList from '../DishList/DishList';

class DinnerDishList extends React.Component {
  render (){
    return (
      <DishList type='dinner' />
    )
  }
}

export default DinnerDishList;
