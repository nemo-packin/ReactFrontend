import React, { useState, useEffect } from 'react';
import "../Styling/CourseStyles.css";
import axios from "axios";

const Course = (props) => {
  const { courseCode, prof, day, time, setListOfRecCourses } = props
  const [ successfullyAdded, setSuccessfullyAdded ] = useState(false)
  const [ failureToAdd, setFailureToAdd] = useState(false)

  useEffect(() => {
    setSuccessfullyAdded(false)
    setFailureToAdd(false)
  }, [courseCode])

  useEffect(() => {
    if(failureToAdd === true){
      setSuccessfullyAdded(false)
    }
  }, [failureToAdd])

  useEffect(() => {
    if(successfullyAdded === true){
      setFailureToAdd(false)
    }
  }, [successfullyAdded])

  const addCourse = async () => {
    console.log(`course code: ${courseCode}`)
    await axios.post('http://localhost:8080/api/addCourse', {
      courseCode: courseCode
    })
      .then(result => {
        console.log(`result: ${result}`)
        console.log(`data: ${result.data}`)
        console.log(`data size: ${result.data.length}`)
        console.log(`data type: ${typeof(result.data)}`)
        if (typeof(result.data) !== "string") {
          if(result.data.length > 0){
            setListOfRecCourses(result.data)
          }
          setFailureToAdd(true)
        }else{
          setSuccessfullyAdded(true)
        }
      }).catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="box1">
      <div className="box2">
        <h2>{courseCode}</h2>
        <p>Instructor: {prof}</p>
        <p>Schedule: {day} {time}</p>
        <button className='bg-green-600 m-2 w-100 rounded-none' onClick={() => addCourse()}>Add to Schedule</button>
        {successfullyAdded && <div className='text-green-600'>Successfully added the course!</div>}
        {failureToAdd && <div className='text-red-600'>Did Not Add, course Overlap!</div>}
      </div>
    </div>
  );

}

export default Course;