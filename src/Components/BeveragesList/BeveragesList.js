import React from 'react';
import './BeveragesList.css';
import DishList from '../DishList/DishList';

class BeveragesList extends React.Component {
  render (){
    return (
      <div className="container">
        <DishList type="beverages" />
      </div>
    )
  }
}

export default BeveragesList;
