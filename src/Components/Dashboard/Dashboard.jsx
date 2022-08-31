import React from 'react'
import Projects from './Projects'
import Team from './Team'
import Profile from './Profile'
import Urgent from './Urgent'

function Dashboard() {
  return (
        <div className='dashboard flexCol'>
           <Projects/>
           <div className="flexRow around">
                <Team/>
                <Profile/>
           </div>
           <Urgent/>
        </div>
    
  )
}

export default Dashboard