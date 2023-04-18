import React from 'react'
import {Link} from 'react-router-dom'

const AdminHome = () => {
    return(
        <div>
            <div><Link to='/'>Landing Page</Link></div>
            <div><Link to='/Home'>Home</Link></div>
            <div><Link to='/SchedulerPage'>SchedulerPage</Link></div>         
        </div>
    )
}

export default AdminHome;