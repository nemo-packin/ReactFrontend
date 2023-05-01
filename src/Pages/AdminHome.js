import React from 'react'
import Calendar from '../Components/Calendar'
import AccountInfo from '../Components/AccountInfo'
import {react, useState } from 'react'
import Search from '../Components/Search/Search'
import Course from '../Components/Course'

const AdminHome = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [cc, setCC] = useState('')
    const [prof, setProf] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [listOfRecCourses, setListOfRecCourses] = useState([])


    function courseClicked(courseCode, prof, day, time) {
        setShowComponent(true)
        setCC(courseCode)
        setProf(prof)
        setDay(day)
        setTime(time)
    }

    return(
        <div>
            <div className = "page-title">
                <h2>Administrator Home</h2>
            </div>
            <Search courseClicked={courseClicked} />
            <div>
                {showComponent && <Course courseCode={cc} prof={prof} day={day} time={time} setListOfRecCourses={setListOfRecCourses} />}
            </div>
            <Calendar/>
        </div>
    )
}

export default AdminHome;