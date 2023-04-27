import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { stringify } from 'qs';

const SearchBox = () => {
    const [displayResults, setDisplayResults] = useState([])
    const [d, setD] = useState()
    // const [s, setS] = useState('')

    useEffect(() => {
        console.log("HERE")
        console.log(displayResults)
    }, [displayResults])

    useEffect(() => {
        console.log("HERE (d)")
        console.log(d)
    }, [d])

    const getSearchResult = async (searchContent) => {
        console.log(`Search content: ${searchContent}`)
        await axios.post('http://localhost:8080/api/searchResults', {
            content: searchContent
        })
        .then(searchResults => {
            console.log(searchResults.data)
            const uniqueCourseCodes = [...new Set(searchResults.data.map((d) => d.courseCode))];

            setD(uniqueCourseCodes.map((courseCode) => {
                return <li key={courseCode}>{courseCode}</li>
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
                {d}
            </ol>
        </div>
    )
}

export default SearchBox;