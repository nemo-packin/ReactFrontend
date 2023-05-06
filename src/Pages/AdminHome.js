import React from 'react'
import Calendar from '../Components/Calendar'
import { react, useState, useEffect } from 'react'
import Search from '../Components/Search/Search'
import NavBar from '../Components/NavBar'
import StudentSearch from '../Components/Search/StudentSearch'
import axios from 'axios'

const AdminHome = () => {
    const [listOfRecCourses, setListOfRecCourses] = useState([])
    const [stuSearch, setStuSearch] = useState(true)
    const [showCal, setShowCal] = useState(false)
    const [stuUsername, setStuUsername] = useState('')
    const [stu2, setStu2] = useState('')
    const [reloadPage, setReloadPage] = useState(0)

    //faheirufaher
    const [showConfirm, setShowConfirm] = useState(false)
    const [showError, setShowError] = useState(false)
    

    useEffect(() => {
        createPsuedoStu()
    }, [stuUsername])

    const makeConfirmAppear = () => {
        setShowConfirm(true);
        setReloadPage(reloadPage + 1)
        setTimeout(() => {
            setShowConfirm(false);
        }, 3000); // Hide the alert after 3 seconds
    }

    const makeErrorAppear = () => {
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
        }, 3000); // Hide the alert after 3 seconds
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
            <div className="relative">
                {showConfirm && (
                    <div className={`absolute top-0 left-0 right-0 bg-green-600 text-white px-4 py-2 font-bold text-center ${showConfirm ? '' : 'hidden'}`} id="alert">
                        Course Successfully Added!
                    </div>
                )}
            </div>
            <div className="relative">
                {showError && (
                    <div className={`absolute top-0 left-0 right-0 bg-red-600 text-white px-4 py-2 font-bold text-center ${showError ? '' : 'hidden'}`} id="alert">
                        Failed to add to Schedule!
                    </div>
                )}
            </div> 

            <div className="page-title">
                <h2>Administrator Home</h2>
            </div>
            <label>Student Search:</label>
            <input type='radio' name='searchType' onChange={() => setStuSearch(true)} />
            <label>CourseSearch:</label>
            <input type='radio' name='searchType' onChange={() => setStuSearch(false)} />
            {stuSearch ? <StudentSearch setStuUsername={setStuUsername} /> : <Search setShowConfirm={makeConfirmAppear} setShowError={makeErrorAppear} purpose="PseudoStu"/>}

            {showCal && <Calendar reloadPage={reloadPage} username={stu2} purpose="PseudoStu"/>}
            {/* <Calendar username={stu2} purpose="PseudoStu" /> */}
        </div>
    )
}

export default AdminHome;