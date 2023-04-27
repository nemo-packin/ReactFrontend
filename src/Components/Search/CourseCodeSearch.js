import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Course from '../Course'

const CourseCodeSearch = (courseClicked) => {
    const [displayResults, setDisplayResults] = useState()

    useEffect(() => {
        console.log(displayResults)
    }, [displayResults])

    const getSearchResult = async (searchContent) => {
        console.log(`Search content: ${searchContent}`)
        await axios.post('http://localhost:8080/api/ccSearchResults', {
            content: searchContent
        })
        .then(searchResults => {
            const courseMap = new Map();
            searchResults.data.forEach((course, index) =>{
                courseMap.set(course.courseCode, course)
            })
            setDisplayResults(Array.from(courseMap).map(([courseCode, course]) => {
                if(courseMap.has(courseCode)){
                    courseMap.delete(courseCode)
                    return <li key={courseCode}
                            onClick={() => {courseClicked.courseClicked(courseCode, course.prof, course.day, course.time)}}>{courseCode}</li>
                }
            }))
        }).catch(error => {
            console.log(error)
        })
    }

    return(
        <div className=''>
            <input
                className=''
                type='search'
                placeholder='Search Course'
                onChange={(e) => {getSearchResult(e.target.value)}}
            />
            <ol>
                {displayResults}
            </ol>
        </div>
    )
}

export default CourseCodeSearch;