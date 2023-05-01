import React from 'react'
import Calendar from '../Components/Calendar'
import AccountInfo from '../Components/AccountInfo'

const StudentHome = () => {
    return(
        <div>
            <div className = "page-title">
                <h2 className=''>Student Home</h2>
            </div>
            <AccountInfo/>
            <Calendar/>
        </div>
    )
}

export default StudentHome;
