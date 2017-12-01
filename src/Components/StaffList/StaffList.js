import React from 'react';
import './StaffList.css';
import Staff from '../Staff/Staff'
import theStaff from './theStaff'


class StaffList extends React.Component {
  render (){
    return (
      <div className='staff-list media'>
        <h1>We&#39;re Here for You</h1>
        {(theStaff.length) ? theStaff.map((staff, i) =>
          <div key={i} className="col-sm-6">
            <Staff key={i}
                   name={staff.name}
                   thumbnail={staff.thumbnail}
                   title={staff.title}
                   thumbnailalign={((i%2)===0)?'left':'right'}/>
          </div>
        ) : <p>No One working here atm.</p>
        }
      </div>
    )
  }
}

export default StaffList;
