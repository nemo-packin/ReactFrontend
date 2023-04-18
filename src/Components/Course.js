import React, {Component} from 'react';

class Course extends Component {
  render() {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div style={{ 
          backgroundColor: '#fff', 
          borderRadius: '8px', 
          boxShadow: '0 0 16px rgba(0, 0, 0, 0.2)', 
          padding: '24px' 
        }}>
          <h2>COMP 141</h2>
          <p>Instructor: Dr. Dellinger</p>
          <p>Schedule: MWF 10:00am</p>
        </div>
      </div>
    );
  }
}

export default Course;