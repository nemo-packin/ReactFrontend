import React, { useState } from "react";
import Course from '../Components/Course'
import CourseCodeSearch from "../Components/Search/CourseCodeSearch";

const SchedulerPage = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [cc, setCC] = useState('')
    const [prof, setProf] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')

    function courseClicked(courseCode, prof, day, time){
        setShowComponent(true)
        setCC(courseCode)
        setProf(prof)
        setDay(day)
        setTime(time)
    }

    return (
        <div>
            <div className = "page-title">
                <h2>Search</h2>
            </div>
            <CourseCodeSearch courseClicked={courseClicked}/>
            <div>
            {/* <button onClick={() => setShowComponent(!showComponent)}>Show Component</button> */}
            {showComponent && <Course courseCode={cc} prof={prof} day={day} time={time}/>}
            </div>
        </div>
    )
}

export default SchedulerPage;