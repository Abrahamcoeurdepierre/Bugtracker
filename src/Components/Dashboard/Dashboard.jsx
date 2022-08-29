import React from 'react'
import Projects from './Projects'
import Team from './Team'


function Dashboard() {
  return (
        <div className='dashboard'>
           <Projects/>
           <div className="flexRow">
                <Team/>
           </div>
           
        </div>
    
  )
}

export default Dashboard