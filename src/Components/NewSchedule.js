import React, { useState } from 'react';
import "../Styling/NewScheduleStyles.css";
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
        <div className="newSchedule">
            <label htmlFor='nameForSchedule'>Name for new schedule: </label>
            <input type='text' className='text-black border-solid border-2 border-grey-light' id='nameForSchedule' onChange={(e) => {
                setName(e.target.value)
            }} />
            <label htmlFor='semesterForSchedule'>Semester for new schedule: </label>
            <input type='text' className='text-black border-solid border-2 border-grey-light' id='semesterForSchedule' onChange={(e) => {
                setSemester(e.target.value)
            }} />
            <button className='bg-green-600 m-2 w-100 rounded-none' onClick={() => {newSchedule()}}>Make New Schedule</button>
        </div>
    )
}

export default NewSchedule