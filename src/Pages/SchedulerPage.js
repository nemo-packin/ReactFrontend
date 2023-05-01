import React, { useState, useEffect } from "react";
import Course from '../Components/Course'
import Search from "../Components/Search/Search";

const SchedulerPage = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [cc, setCC] = useState('')
    const [prof, setProf] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [listOfRecCourses, setListOfRecCourses] = useState([])
    const [listOfSuggested, setListOfSuggested] = useState([])
    const [showSuggested, setShowSuggested] = useState(false)

    useEffect(() => {
        setShowSuggested(true)
        displaySuggested()
    }, [listOfRecCourses])

    useEffect(() => {
        setShowSuggested(false)
    }, [])

    function courseClicked(courseCode, prof, day, time) {
        setShowComponent(true)
        setCC(courseCode)
        setProf(prof)
        setDay(day)
        setTime(time)
    }

    function displaySuggested() {
        const courseMap = new Map();
        listOfRecCourses.forEach((course, index) => {
            courseMap.set(course.courseCode, course)
        })

        setListOfSuggested(Array.from(courseMap).map(([courseCode, course]) => {
            if (courseMap.has(courseCode)) {
                courseMap.delete(courseCode)
                return <li key={courseCode}
                    onClick={() => { courseClicked(courseCode, course.prof, course.day, course.time) }}>{courseCode}</li>
            }
        }))
    }

    return (
        <div>
            <div className="page-title">
                <h2>Search</h2>
            </div>
            {console.log(`show: ${showSuggested}`)}
            <div>Suggested Courses:</div>
            {displaySuggested ? (
                <ol>
                    {listOfSuggested}
                </ol>
            ) : <></>}

            <Search courseClicked={courseClicked} />
            <div>
                {/* <button onClick={() => setShowComponent(!showComponent)}>Show Component</button> */}
                {showComponent && <Course courseCode={cc} prof={prof} day={day} time={time} setListOfRecCourses={setListOfRecCourses} />}
            </div>
        </div>
    )
}

export default SchedulerPage;