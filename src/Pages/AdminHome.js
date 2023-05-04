import React from 'react'
import Calendar from '../Components/Calendar'
import { react, useState, useEffect } from 'react'
import Search from '../Components/Search/Search'
import Course from '../Components/Course'
import NavBar from '../Components/NavBar'
import StudentSearch from '../Components/Search/StudentSearch'
import axios from 'axios'

const AdminHome = () => {
    const [showComponent, setShowComponent] = useState(false);
    const [cc, setCC] = useState('')
    const [prof, setProf] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [listOfRecCourses, setListOfRecCourses] = useState([])
    const [stuSearch, setStuSearch] = useState(true)
    const [showCal, setShowCal] = useState(false)
    const [stuUsername, setStuUsername] = useState('')
    const [stu2, setStu2] = useState('')
    

    useEffect(() => {
        createPsuedoStu()
    }, [stuUsername])

    function courseClicked(courseCode, prof, day, time) {
        setShowComponent(true)
        setCC(courseCode)
        setProf(prof)
        setDay(day)
        setTime(time)
    }

    async function createPsuedoStu() {
        if (stuUsername !== '') {
            axios.post('http://localhost:8080/api/createPseudoStudent', {
                username: stuUsername
            })
                .then((response) => {
                    if (response.data === 'success') {
                        checkPseudoStuStatus()
                    }
                }).catch((error) => {
                    console.log(error)
                })
        }

    }

    async function checkPseudoStuStatus() {
        axios.get('http://localhost:8080/api/pseudoStatus')
            .then((response) => {
                setStu2(stuUsername)
                setShowCal(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <NavBar userType='admin' />
            <div className="page-title">
                <h2>Administrator Home</h2>
            </div>
            <label>Student Search:</label>
            <input type='radio' name='searchType' onChange={() => setStuSearch(true)} />
            <label>CourseSearch:</label>
            <input type='radio' name='searchType' onChange={() => setStuSearch(false)} />
            {stuSearch ? <StudentSearch setStuUsername={setStuUsername} /> : <Search courseClicked={courseClicked} />}

            <div>
                {showComponent && <Course courseCode={cc} prof={prof} day={day} time={time} setListOfRecCourses={setListOfRecCourses} />}
            </div>
            {showCal && <Calendar username={stu2} purpose="PseudoStu" />}
        </div>
    )
}

export default AdminHome;