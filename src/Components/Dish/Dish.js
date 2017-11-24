import React from 'react';
import './Dish.css';

class Dish extends React.Component {
  render (){
    const {subcategory, content} = this.props

    return (
      <div className='dish-container'>
          <div className='dish-subcategory text-uppercase'>{subcategory} </div>
          {(content.length) ? content.map((dish, i) =>
            <div className='dish-content' key={i}>
              <div className='dish-info text-capitalize'>
                <div className='dish-name'>{dish.name} </div>
                <div className='dish-price'>{dish.price}</div>
              </div>
              <p>{dish.description}</p>
              <ul className="list-inline">        
                {(dish.tags.length) ? dish.tags.map((tag,i) =>
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
          ) : <p>No Dishes</p>
          }
      </div>
    )
  }
}

export default Dish;
