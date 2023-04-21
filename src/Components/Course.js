import React, {Component} from 'react';
import "../Styling/CourseStyles.css";

class Course extends Component {
  render() {
    return (
      <div className = "box1">
        <div className = "box2">
          <h2>COMP 141</h2>
          <p>Instructor: Dr. Dellinger</p>
          <p>Schedule: MWF 10:00am</p>
        </div>
      </div>
    );
  }
}

export default Course;