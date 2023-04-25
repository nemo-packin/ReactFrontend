import React from 'react'
import Calendar from '../Components/Calendar'
import AccountInfo from '../Components/AccountInfo'
import NavBar from '../Components/NavBar';

const StudentHome = () => {
    return(
        <div>
            <div className = "page-title">
                <h2>Student Home</h2>
            </div>
            <AccountInfo/>
            <Calendar/>
        </div>
    )
}

export default StudentHome;
