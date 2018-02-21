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
                        {(tag) === 'plant-based' ?
                          <i className="fa fa-leaf" aria-hidden="true"></i>
                          : (tag) === 'trekkie' ?
                            <i className="fa fa-hand-spock-o" aria-hidden="true"></i>
                          : (tag) === 'terran' ?
                            <i className="fa fa-globe" aria-hidden="true"></i>
                          : (tag) === 'rebel' ?
                            <i className="fa fa-rebel" aria-hidden="true"></i>
                          : (tag) === 'alcoholic' ?
                           <i className="fa fa-percent" aria-hidden="true"></i>
                          : (tag) === 'magic' ?
                            <i className="fa fa-magic" aria-hidden="true"></i>
                          : (tag) === 'awesome' ?
                             <i className=" fa fa-coffee" aria-hidden="true"></i>
                          :  <i className="fa fa-question" aria-hidden="true"></i>
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
