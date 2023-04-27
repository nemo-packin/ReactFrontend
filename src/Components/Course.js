import React from 'react';
import "../Styling/CourseStyles.css";

const Course = (props) => {
  const { courseCode, prof, day, time } = props
  return (
    <div className="box1">
      <div className="box2">
        <h2>{courseCode}</h2>
        <p>Instructor: {prof}</p>
        <p>Schedule: {day} {time}</p>
      </div>
    </div>
  );

}

export default Course;