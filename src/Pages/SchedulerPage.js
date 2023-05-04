import React, { useState, useEffect } from "react";
import "../Styling/SearchStyles.css";
import Course from '../Components/Course'
import Search from "../Components/Search/Search";
import NavBar from "../Components/NavBar";

const SchedulerPage = () => {
    // const [showComponent, setShowComponent] = useState(false);
    // const [cc, setCC] = useState('')
    // const [prof, setProf] = useState('')
    // const [day, setDay] = useState('')
    // const [time, setTime] = useState('')
    
    // const [listOfRecCourses, setListOfRecCourses] = useState([])
    // const [listOfSuggested, setListOfSuggested] = useState([])
    // const [showSuggested, setShowSuggested] = useState(false)

    // useEffect(() => {
    //     setShowSuggested(true)
    //     displaySuggested()
    // }, [listOfRecCourses])

    // useEffect(() => {
    //     setShowSuggested(false)
    // }, [])

    // function courseClicked(courseCode, prof, day, time) {
    //     setShowComponent(true)
    //     setCC(courseCode)
    //     setProf(prof)
    //     setDay(day)
    //     setTime(time)
    // }

    

    // function displaySuggested() {
    //     const courseMap = new Map();
    //     listOfRecCourses.forEach((course, index) => {
    //         courseMap.set(course.courseCode, course)
    //     })

    //     setListOfSuggested(Array.from(courseMap).map(([courseCode, course]) => {
    //         if (courseMap.has(courseCode)) {
    //             courseMap.delete(courseCode)
    //             return <tr key={courseCode}>
    //             <td key={courseCode + '1'}><button className='bg-red-600'>Click me!</button></td>
    //             <td key={courseCode + '2'}>{course.semester}</td>
    //             <td key={courseCode + '3'}>{courseCode}</td>
    //             <td key={courseCode + '4'}>{course.day}</td>
    //             <td key={courseCode + '5'}>{course.time}</td>
    //             <td key={courseCode + '6'}>{course.prof}</td>
    //             <td key={courseCode + '7'}>{course.creditHours}</td>
                
    //         </tr>
    //             // <li key={courseCode}
    //             //     onClick={() => { courseClicked(courseCode, course.prof, course.day, course.time) }}>{courseCode}</li>
    //         }
    //     }))
    // }

    return (
        <>
            <NavBar userType='student'/>
            <div className="search-box">
                <div className="page-title">
                    <h2>Search</h2>
                </div>
                <div>Suggested Courses:</div>
                {/* {showSuggested ? (
                    <table>
                    <thead>
                        <tr>
                            <th className="p-2">Add Course</th>
                            <th className="p-2">Semester</th>
                            <th className="p-2">Course Code</th>
                            <th className="p-2">Day</th>
                            <th className="p-2">Time</th>
                            <th className="p-2">Professor</th>
                            <th className="p-2">Credits</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOfSuggested}
                    </tbody>
                </table>
                    // <ol>
                    //     {listOfSuggested}
                    // </ol>
                ) : <></>} */}

                {<Search/>}{/* <Search courseClicked={courseClicked} /> */}
                {/* <button onClick={() => setShowComponent(!showComponent)}>Show Component</button> */}
                {/* {showComponent && <Course courseCode={cc} prof={prof} day={day} time={time} setListOfRecCourses={setListOfRecCourses} />} */}
            </div>
        </>

    )
}

export default SchedulerPage;