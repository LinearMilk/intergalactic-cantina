import React from 'react';
import './DishList.css';
import Dish from '../Dish/Dish'

let dishes = [
  {
    name: 'potatoes',
    price: '$7',
    description: 'Your old regular spuds. Microwaved to achieved perfect balance between mushy and stone-hard.'
  },
  {
    name: 'lentils',
    price: '$5',
    description: 'Dry split red lentils. Be prepared to do a lot of chewing.'
  },{
    name: 'chicken',
    price: '$20',
    description: 'Space chicken. No one really know how to cook it, but it tastes fantasic.'
  }];

class DishList extends React.Component {
  render (){
    return (
      <div className='dishList'>
        {(dishes.length) ? dishes.map((dish, i) =>
          <Dish name={dish.name}
                price={dish.price}
                description={dish.description} />
        ) : <p>No Dishes</p>
        }
      </div>
    )
  }
}

export default DishList;
