import React from 'react';
import './Dish.css';

class Dish extends React.Component {
  render (){
    const {name, price, description, tags} = this.props





    return (
      <div className='dish-container'>
        <div className='dish-info text-capitalize'>
            <div className='dish-name'>{name} </div>
            <div className='dish-price'>{price}</div>
        </div>
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
