import React from 'react';
import './Dish.css';

class Dish extends React.Component {
  render (){
    const {name, price, description, tags} = this.props





    return (
      <div className='dish-container'>
        <p className='text-capitalize'>{name} <strong>{price}</strong></p>
        <p>{description}</p>
        
        <ul className="list-inline">
        {(tags.length) ? tags.map((tag,i) =>
          <li className={"list-inline-item " + tag} key={i}>{tag}</li>
        ) : ""
        }
        </ul>
      </div>
    )
  }
}

export default Dish;
