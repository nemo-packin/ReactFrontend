import React from 'react'
import Calendar from '../Components/Calendar'
import AccountInfo from '../Components/AccountInfo'
import NavBar from '../Components/NavBar';

const AdminHome = () => {
    return(
        <div>
            <NavBar/>  
            <div className = "page-title">
                <h2>Administrator Home</h2>
            </div>
            <AccountInfo/>     
            <Calendar/>
        </div>
    )
}

export default AdminHome;