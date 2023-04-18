import React from 'react'
import {Link} from 'react-router-dom'

const SchedulerPage = () => {
    return (
        <div>
            <div><Link to='/'>Landing Page</Link></div>
            <div><Link to='/Home'>Home</Link></div>
            <div><Link to='/AdminHome'>Admin Home</Link></div>
               
        </div>
    )
}

export default SchedulerPage;