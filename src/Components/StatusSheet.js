import React, { useState, useEffect } from 'react';
import "../Styling/StatusSheetStyles.css";
import axios from "axios";

const StatusSheet = (props) => {
  const {  } = props
  const { successfullyAdded, setSuccessfullyAdded } = useState(false)

  const addCourse = async () => {
    await axios.post('http://localhost:8080/api/statusSheet', {
      
    }).catch(error => {
    console.log(error)
    })
  }
  return (
    <div className="outer">
  <h2>Status Sheet</h2>
  <div className="inner">
    <p>Beep Boop</p>
  </div>
</div>

  );

}

export default StatusSheet;