import { useState, React, useEffect } from "react";

const DayFilter = (props) => {
    const [mondaySelect, setMondaySelect] = useState('')
    const [tuesdaySelect, setTuesdaySelect] = useState('')
    const [wednesdaySelect, setWednesdaySelect] = useState('')
    const [thursdaySelect, setThursdaySelect] = useState('')
    const [fridaySelect, setFridaySelect] = useState('')

    useEffect(() => {
        const selectedDays = mondaySelect + tuesdaySelect + wednesdaySelect + thursdaySelect + fridaySelect
      
        // Call the setDayFilter function with the selected days
        props.setDayFilter(selectedDays);
    }, [mondaySelect, tuesdaySelect, wednesdaySelect, thursdaySelect, fridaySelect])
      
      const handleDayChange = (e) => {
        const day = e.target.value;
        const isChecked = e.target.checked;

        console.log("DAY: " + day)
        console.log("CHECKED: " + isChecked)
      
        if(day === 'M' && isChecked) {
            setMondaySelect('M')
        }
        else if(day === 'M' && !isChecked) {
            setMondaySelect('')
        }
        else if(day === 'T' && isChecked) {
            setTuesdaySelect('T')
        }
        else if(day === 'T' && !isChecked) {
            setTuesdaySelect('')
        }
        else if(day === 'W' && isChecked) {
            setWednesdaySelect('W')
        }
        else if(day === 'W' && !isChecked) {
            setWednesdaySelect('')
        }
        else if(day === 'R' && isChecked) {
            setThursdaySelect('R')
        }
        else if(day === 'R' && !isChecked) {
            setThursdaySelect('')
        }
        else if(day === 'F' && isChecked) {
            setFridaySelect('F')
        }
        else if(day === 'F' && !isChecked) {
            setFridaySelect('')
        }
      };
      

  return (
    <div>
      <label htmlFor="dayFilter">Day Filter:</label>
      <br />
      <input
        id="dayFilter"
        type="checkbox"
        value="M"
        onChange={handleDayChange}
      />
      <label htmlFor="dayFilter">Monday</label>
      <br />
      <input
        id="dayFilter"
        type="checkbox"
        value="T"
        onChange={handleDayChange}
      />
      <label htmlFor="dayFilter">Tuesday</label>
      <br />
      <input
        id="dayFilter"
        type="checkbox"
        value="W"
        onChange={handleDayChange}
      />
      <label htmlFor="dayFilter">Wednesday</label>
      <br />
      <input
        id="dayFilter"
        type="checkbox"
        value="R"
        onChange={handleDayChange}
      />
      <label htmlFor="dayFilter">Thursday</label>
      <br />
      <input
        id="dayFilter"
        type="checkbox"
        value="F"
        onChange={handleDayChange}
      />
      <label htmlFor="dayFilter">Friday</label>
      <br />
    </div>
  );
};

export default DayFilter;
