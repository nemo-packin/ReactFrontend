import { React, useState, useEffect } from 'react'
import axios from 'axios'

const StudentSearch = (props) => {
    const [student, setStudent] = useState('')
    const [displayResults, setDisplayResults] = useState()

    useEffect(() => {
        getStuSearchResults()
    }, [student])

    async function getStuSearchResults() {
        if(student.trim() !== ''){
            await axios.post("http://localhost:8080/api/SearchStudents", {
            usernameSearch: student
        }).then((result) => {
            console.log(result)
            setDisplayResults(result.data.map((d) => {
                return <li key={d.username} onClick={() => {props.setStuUsername(d.username)}}>{d.username}</li>
            }))
        }).catch((error) => {
            console.log(error)
        })
        }else {setDisplayResults()}
        
    }

    return (
        <div className=''>
            <input
                className='text-black border-solid border-2 border-grey-light'
                type='search'
                placeholder='Student Search'
                onChange={(e) => {setStudent(e.target.value)}}
            />
            <div className='max-h-40 overflow-y-auto'>
                <ol>
                    {displayResults}
                </ol>
            </div>
        </div>
    )
}

export default StudentSearch 