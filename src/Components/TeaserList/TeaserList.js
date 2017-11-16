import React from 'react';
import './TeaserList.css';
import Teaser from '../Teaser/Teaser'
import teaserItems from './teaserItems'


class TeaserList extends React.Component {
  render (){
    return (
      <div className='teaser-list media'>
        {(teaserItems.length) ? teaserItems.map((teaser, i) =>
          <div key={i} className='col-sm-4 teaser-list-item'>
            <Teaser key={i}
                   image={teaser.image}
                   title={teaser.title}
                   description={teaser.description}
                   link={teaser.link} />
          </div>
        ) : <p>Nothing here.</p>
        }
      </div>
    )
  }
}

export default TeaserList;