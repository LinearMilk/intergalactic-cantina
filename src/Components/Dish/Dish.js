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
          <li className={"list-inline-item " + tag} key={i}>
              <span className='icon'>
                {(tag) === 'vegan' ? 
                  <i className="fa fa-check" aria-hidden="true"></i>
                 : (tag) === 'meat-only' ?
                  <i className="fa fa-male" aria-hidden="true"></i>
                 :
                  <i className="fa fa-leaf" aria-hidden="true"></i>
                }
              </span>
             {tag}
          </li>
        ) : ""
        }
        </ul>
      </div>
    )
  }
}

export default Dish;
