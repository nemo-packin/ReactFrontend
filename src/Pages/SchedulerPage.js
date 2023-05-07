import React, { useState, useEffect } from "react";
import "../Styling/SearchStyles.css";
import Search from "../Components/Search/Search";
import NavBar from "../Components/NavBar";

const SchedulerPage = () => {
    const [showConfirm, setShowConfirm] = useState(false)
    const [showError, setShowError] = useState(false)

    const makeConfirmAppear = () => {
        setShowConfirm(true);
        setTimeout(() => {
            setShowConfirm(false);
        }, 3000); // Hide the alert after 3 seconds
    }

    const makeErrorAppear = () => {
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
        }, 3000); // Hide the alert after 3 seconds
    }

    return ( 
        <>
            <NavBar userType='student' />
            <div className="relative">
                {showConfirm && (
                    <div className={`absolute top-0 left-0 right-0 bg-green-600 text-white px-4 py-2 font-bold text-center ${showConfirm ? '' : 'hidden'}`} id="alert">
                        Course Successfully Added!
                    </div>
                )}
            </div>
            <div className="relative">
                {showError && (
                    <div className={`absolute top-0 left-0 right-0 bg-red-600 text-white px-4 py-2 font-bold text-center ${showError ? '' : 'hidden'}`} id="alert">
                        Failed to add to Schedule!
                    </div>
                )}
            </div> 

            <div className="search-box">
                <div className="page-title">
                    <h2>Search</h2>
                </div>
                {<Search setShowConfirm={makeConfirmAppear} setShowError={makeErrorAppear} purpose="Stu"/>}
            </div>
        </>

    )
}

export default SchedulerPage;