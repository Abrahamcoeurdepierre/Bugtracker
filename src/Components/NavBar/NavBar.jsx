import React from 'react'
import Logout from '../Logout/Logout';

function NavBar() {
  return (
    <div className='navbar flexCol'>
        <h3>BUGTRACKER</h3>
        <div className="navlink flexRow">
            <p>Dashboard</p>
        </div>
        <div className="navlink flexRow">
            <p>Projects</p>
        </div>
        <div className="navlink flexRow">
            <p>Profile</p>
        </div>
        <div className="navlink flexRow">
            <p>Notifications</p>
        </div>
        <div><Logout/></div>
        
    </div>
  )
}

export default NavBar