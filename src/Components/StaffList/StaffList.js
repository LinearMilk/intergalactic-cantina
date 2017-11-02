import React from 'react';
import './StaffList.css';
import Staff from '../Staff/Staff'
import theStaff from './theStaff'


class StaffList extends React.Component {
  render (){
    return (
      <div className='staffList'>
        <h1>Our Staff</h1>
        {(theStaff.length) ? theStaff.map((staff, i) =>
          <Staff key={i}
                 name={staff.name}
                 thumbnail={staff.thumbnail}
                 title={staff.title}
                 description={staff.description} />
        ) : <p>No One working here atm.</p>
        }
      </div>
    )
  }
}

export default StaffList;
