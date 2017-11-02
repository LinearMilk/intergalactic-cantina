import React from 'react';
import './DishList.css';
import Dish from '../Dish/Dish'
import dishes from './Dishes'


class DishList extends React.Component {
  render (){
    return (
      <div className='dishList'>
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
