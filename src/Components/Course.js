import React, { useState } from 'react';
import "../Styling/CourseStyles.css";
import axios from "axios";

const Course = (props) => {
  const { courseCode, prof, day, time } = props
  const { successfullyAdded, setSuccessfullyAdded } = useState(false)
  const addCourse = async () => {
    await axios.post('http://localhost:8080/api/addCourse', {
      courseCode: courseCode
    })
      .then(result => {
        console.log(result)
        if (result.data === true) {
          // setSuccessfullyAdded(true)
        }else{
          console.log("FAILURE")
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
        <button onClick={() => addCourse()}>Add to Schedule</button>
      </div>
    </div>
  );

}

export default Course;