import React, { useState } from 'react';
import axios from 'axios'

const NewSchedule = (props) => {
    const [name, setName] = useState('')
    const [semester, setSemester] = useState('')

    async function newSchedule() {
        if (name !== '' && semester !== '') {
            axios.post('http://localhost:8080/api/newCalendar', {
                nameForSchedule: name,
                semester: semester
            }).then(() => {
                props.cal.setState({
                    makeNewSchedule: false
                })
            })
        }else{console.log("YOU NEED A NAME & SEMESTER")}
    }

    return (
        <div className=''>
            <label htmlFor='nameForSchedule'>Name for new schedule: </label>
            <input type='text' id='nameForSchedule' onChange={(e) => {
                setName(e.target.value)
            }} />
            <label htmlFor='semesterForSchedule'>Semester for new schedule: </label>
            <input type='text' id='semesterForSchedule' onChange={(e) => {
                setSemester(e.target.value)
            }} />
            <button onClick={() => {newSchedule()}}>Make New Schedule</button>
        </div>
    )
}

export default NewSchedule