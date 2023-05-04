import React, { useState } from 'react';
import "../Styling/HomeStyles.css";
import Calendar from '../Components/Calendar';
import AccountInfo from '../Components/AccountInfo';
import StatusSheet from '../Components/StatusSheet';
import NavBar from '../Components/NavBar';

const StudentHome = () => {
  const [showCalendar, setShowCalendar] = useState(true);
  const [showStatusSheet, setShowStatusSheet] = useState(false);

  const handleCalendarClick = () => {
    setShowCalendar(true);
    setShowStatusSheet(false);
  };

  const handleStatusSheetClick = () => {
    setShowStatusSheet(true);
    setShowCalendar(false);
  };

  return (
    <div>
      <NavBar userType='student'/>
      <div className="page-title">
        <h2>Student Home</h2>
      </div>
      <div className="buttonsToggle">
        <button onClick={handleCalendarClick}>Calendar</button>
        <button onClick={handleStatusSheetClick}>Status Sheet</button>
      </div>
      <AccountInfo/>
      {showCalendar && <Calendar purpose="Stu"/>}
      {showStatusSheet && <StatusSheet/>}
    </div>
  );
};

export default StudentHome;

