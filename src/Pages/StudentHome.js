import React from 'react'
import {Link} from 'react-router-dom'
import Calendar from '../Components/Calendar'
import AccountInfo from '../Components/AccountInfo'

const StudentHome = () => {
    return(
        <div>
            <div><Link to='/'>Landing Page</Link></div>
            <div><Link to='/AdminHome'>Admin Home</Link></div>
            <div><Link to='/SchedulerPage'>SchedulerPage</Link></div>
            <Calendar/>
            <AccountInfo/>
        </div>
    )
}

export default StudentHome;
