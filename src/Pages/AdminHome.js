import React from 'react'
import Calendar from '../Components/Calendar'
import AccountInfo from '../Components/AccountInfo'

const AdminHome = () => {
    return(
        <div>
            <div className = "page-title">
                <h2>Administrator Home</h2>
            </div>
            <AccountInfo/>     
            <Calendar/>
        </div>
    )
}

export default AdminHome;