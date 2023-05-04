import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CourseSearch from './CourseSearch';
import DepartmentFilter from './DepartmentFilter';
import TimeFilter from './TimeFilter';
import DayFilter from './DayFilter';
import ProfFilter from './ProfFilter';
import CreditFilter from './CreditFilter';


const Search = (props) => {
    const [displayResults, setDisplayResults] = useState()
    const [courseSearch, setCourseSearch] = useState('')
    const [departmentFilter, setDepartmentFilter] = useState('')
    const [timeFilter, setTimeFilter] = useState('')
    const [dayFilter, setDayFilter] = useState('')
    const [profFilter, setProfFilter] = useState('')
    const [creditFilter, setCreditFilter] = useState('')
    const [listOfRecCourses, setListOfRecCourses] = useState([])
    const [listOfSuggested, setListOfSuggested] = useState([])
    const [showSuggested, setShowSuggested] = useState(false)
    const [successfullyAdded, setSuccessfullyAdded] = useState(false)
    const [failureToAdd, setFailureToAdd] = useState(false)


    useEffect(() => {
        setShowSuggested(true)
        displaySuggested()
    }, [listOfRecCourses])

    useEffect(() => {
        setShowSuggested(false)
    }, [])

    useEffect(() => {
        getSearchResult()
    }, [courseSearch, departmentFilter, timeFilter, dayFilter, profFilter, creditFilter])

    const addCourse = async (courseCode) => {
        console.log(`course code: ${courseCode}`)
        await axios.post('http://localhost:8080/api/addCourse', {
            courseCode: courseCode
        })
            .then(result => {
                console.log(`result: ${result}`)
                console.log(`data: ${result.data}`)
                console.log(`data size: ${result.data.length}`)
                console.log(`data type: ${typeof (result.data)}`)
                if (typeof (result.data) !== "string") {
                    if (result.data.length > 0) {
                        setListOfRecCourses(result.data)
                    }
                    setFailureToAdd(true)
                } else {
                    setSuccessfullyAdded(true)
                }
            }).catch(error => {
                console.log(error)
            })
    }

    // updates the search results so long as there is input from one of the filters
    async function getSearchResult() {
        // const filterVal = `course code_${courseSearch};department_${departmentFilter};time_${timeFilter};day_${dayFilter};prof_${profFilter};credit hours_${creditFilter}`
        const filterVal = `course code_${courseSearch};time_${timeFilter};day_${dayFilter};prof_${profFilter};credit hours_${creditFilter}`
        // let usefulFilters = (courseSearch === '' ? 0 : 1) + (departmentFilter === '' ? 0 : 1) + (timeFilter === '' ? 0 : 1) + (dayFilter === '' ? 0 : 1) + (profFilter === '' ? 0 : 1) + (creditFilter === '' ? 0 : 1)
        let usefulFilters = (courseSearch === '' ? 0 : 1) + (timeFilter === '' ? 0 : 1) + (dayFilter === '' ? 0 : 1) + (profFilter === '' ? 0 : 1) + (creditFilter === '' ? 0 : 1)
        await axios.post('http://localhost:8080/api/SearchResults', {
            content: filterVal,
            numFilters: usefulFilters.toString()
        })
            .then(searchResults => {
                console.log("HERE!")
                console.log(searchResults)
                const courseMap = new Map();
                searchResults.data.forEach((course, index) => {
                    courseMap.set(course.courseCode, course)
                })
                setDisplayResults(Array.from(courseMap).map(([courseCode, course]) => {
                    if (courseMap.has(courseCode)) {
                        courseMap.delete(courseCode)
                        return <tr key={courseCode}>
                            <td key={courseCode + '1'}><button className='bg-red-600' onClick={() => { addCourse(courseCode) }}>Click me!</button></td>
                            <td key={courseCode + '2'}>{course.semester}</td>
                            <td key={courseCode + '3'}>{courseCode}</td>
                            <td key={courseCode + '4'}>{course.day}</td>
                            <td key={courseCode + '5'}>{course.time}</td>
                            <td key={courseCode + '6'}>{course.prof}</td>
                            <td key={courseCode + '7'}>{course.creditHours}</td>

                        </tr>
                    }
                }))
            }).catch(error => {
                console.log(error)
            })
    }

    function displaySuggested() {
        const courseMap = new Map();
        listOfRecCourses.forEach((course, index) => {
            courseMap.set(course.courseCode, course)
        })

        setListOfSuggested(Array.from(courseMap).map(([courseCode, course]) => {
            if (courseMap.has(courseCode)) {
                courseMap.delete(courseCode)
                return <tr key={courseCode}>
                    <td key={courseCode + '1'}><button className='bg-red-600'>Click me!</button></td>
                    <td key={courseCode + '2'}>{course.semester}</td>
                    <td key={courseCode + '3'}>{courseCode}</td>
                    <td key={courseCode + '4'}>{course.day}</td>
                    <td key={courseCode + '5'}>{course.time}</td>
                    <td key={courseCode + '6'}>{course.prof}</td>
                    <td key={courseCode + '7'}>{course.creditHours}</td>

                </tr>
                // <li key={courseCode}
                //     onClick={() => { courseClicked(courseCode, course.prof, course.day, course.time) }}>{courseCode}</li>
            }
        }))
    }

    return (
        <div className=''>
            {showSuggested ? (
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
            ) : <></>}
            {/* Filters */}
            <CourseSearch setCourseSearch={setCourseSearch} />
            {/* <DepartmentFilter setDepartmentFilter={setDepartmentFilter}/> */}
            <TimeFilter setTimeFilter={setTimeFilter} />
            <DayFilter setDayFilter={setDayFilter} />
            <ProfFilter setProfFilter={setProfFilter} />
            <CreditFilter setCreditFilter={setCreditFilter} />
            <div className='max-h-40 overflow-y-auto'>
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
                        {displayResults}
                    </tbody>
                </table>


                {/* <ol>
                    {displayResults}
                </ol> */}
            </div>

        </div>
    )
}

export default Search;