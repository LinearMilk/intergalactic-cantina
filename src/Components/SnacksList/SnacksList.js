import React from 'react';
import './SnacksList.css';
import DishList from '../DishList/DishList';

class SnacksList extends React.Component {
  render (){
    return (
      <div className="container">
        <DishList type='snacks' />
      </div>
    )
  }
}

export default SnacksList;
