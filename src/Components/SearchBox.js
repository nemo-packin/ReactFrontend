import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Course from '../Components/Course'

const SearchBox = () => {
    const [displayResults, setDisplayResults] = useState()
    const [cc, setCC] = useState('')
    const [prof, setProf] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [showClass, setShowClass] = useState(false)

    useEffect(() => {
        console.log(displayResults)
    }, [displayResults])

    const getSearchResult = async (searchContent) => {
        console.log(`Search content: ${searchContent}`)
        await axios.post('http://localhost:8080/api/searchResults', {
            content: searchContent
        })
        .then(searchResults => {
            // console.log(searchResults.data)
            const courseMap = new Map();
            searchResults.data.forEach((course, index) =>{
                courseMap.set(course.courseCode, course)
            })
            setDisplayResults(Array.from(courseMap).map(([courseCode, course]) => {
                if(courseMap.has(courseCode)){
                    courseMap.delete(courseCode)
                    return <li key={courseCode}
                            onClick={() => {setRevealedCourse(courseCode, course.prof, course.day, course.time)}}>{courseCode}</li>
                }
            }))
        }).catch(error => {
            console.log(error)
        })
    }

    function setRevealedCourse(coursecode, prof, day, time){
        console.log(`You clicked on: ${coursecode}`)
        setCC(coursecode)
        setProf(prof)
        setDay(day)
        setTime(time)
        setShowClass(true)

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
                {showClass && <Course courseCode={cc} prof={prof} day={day} time={time}/>}
            </ol>
        </div>
    )
}

export default SearchBox;