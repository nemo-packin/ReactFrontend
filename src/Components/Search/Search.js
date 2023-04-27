import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CourseSearch from './CourseSearch';
import DepartmentFilter from './DepartmentFilter';
import TimeFilter from './TimeFilter';
import DayFilter from './DayFilter';
import ProfFilter from './ProfFilter';
import CreditFilter from './CreditFilter';

const Search = (courseClicked) => {
    const [displayResults, setDisplayResults] = useState()
    const [courseSearch, setCourseSearch] = useState('')
    const [departmentFilter, setDepartmentFilter] = useState('')
    const [timeFilter, setTimeFilter] = useState('')
    const [dayFilter, setDayFilter] = useState('')
    const [profFilter, setProfFilter] = useState('')
    const [creditFilter, setCreditFilter] = useState('')


    useEffect(() => {
        console.log(displayResults)
    }, [displayResults])

    useEffect(() => {
        console.log(`course Search: ${courseSearch}`)
        console.log(`Department Filter: ${departmentFilter}`)
        console.log(`Time Filter: ${timeFilter}`)
        console.log(`Day Filter: ${dayFilter}`)
        console.log(`Prof Filter: ${profFilter}`)
        console.log(`Credit Filter: ${creditFilter}`)
        getSearchResult()
    }, [courseSearch, departmentFilter, timeFilter, dayFilter, profFilter, creditFilter])

    async function getSearchResult() {
            // const filterVal = `course code_${courseSearch};department_${departmentFilter};time_${timeFilter};day_${dayFilter};prof_${profFilter};credit hours_${creditFilter}`
            const filterVal = `course code_${courseSearch};time_${timeFilter};day_${dayFilter};prof_${profFilter};credit hours_${creditFilter}`
            console.log(`Filters: ${filterVal}`)
            // let usefulFilters = (courseSearch === '' ? 0 : 1) + (departmentFilter === '' ? 0 : 1) + (timeFilter === '' ? 0 : 1) + (dayFilter === '' ? 0 : 1) + (profFilter === '' ? 0 : 1) + (creditFilter === '' ? 0 : 1)
            let usefulFilters = (courseSearch === '' ? 0 : 1) + (timeFilter === '' ? 0 : 1) + (dayFilter === '' ? 0 : 1) + (profFilter === '' ? 0 : 1) + (creditFilter === '' ? 0 : 1)
            await axios.post('http://localhost:8080/api/ccSearchResults', {
                content: filterVal,
                numFilters: usefulFilters.toString()
            })
                .then(searchResults => {
                    const courseMap = new Map();
                    searchResults.data.forEach((course, index) => {
                        courseMap.set(course.courseCode, course)
                    })
                    setDisplayResults(Array.from(courseMap).map(([courseCode, course]) => {
                        if (courseMap.has(courseCode)) {
                            courseMap.delete(courseCode)
                            return <li key={courseCode}
                                onClick={() => { courseClicked.courseClicked(courseCode, course.prof, course.day, course.time) }}>{courseCode}</li>
                        }
                    }))
                }).catch(error => {
                    console.log(error)
                })
    }

    return (
        <div className=''>
            <CourseSearch setCourseSearch={setCourseSearch} />
            {/* <DepartmentFilter setDepartmentFilter={setDepartmentFilter}/> */}
            <TimeFilter setTimeFilter={setTimeFilter}/>
            <DayFilter setDayFilter={setDayFilter}/>
            <ProfFilter setProfFilter={setProfFilter}/>
            <CreditFilter setCreditFilter={setCreditFilter}/>
            <ol>
                {displayResults}
            </ol>
        </div>
    )
}

export default Search;