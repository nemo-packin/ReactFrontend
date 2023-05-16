import React, { useState, useEffect } from 'react';
import '../Styling/StatusSheetStyles.css';
import axios from 'axios';

const StatusSheet = (props) => {

  const [courses, setCourses] = useState('');
  const [prevCourses, setPrevCourses] = useState([]);
  const [reqs, setReqs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:8080/api/statusSheet');
      console.log(`result: ${result}`);
      setPrevCourses(result.data.courses);
      setReqs(result.data.reqs);
    }
    fetchData();
  }, [prevCourses]);

  function addCourse(inputValue) {
    axios.post('http://localhost:8080/api/statusSheet', {
      code: inputValue
    })
      .then(result => {
        console.log(result)
        if (result.data !== true) {
          console.log("FAIL OR IN STATUS SHEET")
        } else {
          console.log("ADDED TO STATUS SHEET AND FETCHING DATA")
          setCourses(''); // clear the input box
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  const handleInputChange = (event) => {
    setCourses(event.target.value);
  };

  return (
    <div className='outer'>
      <h2>Status Sheet</h2>
      <div className='inner'>
        <input
          className='text-black border-solid border-2 border-grey-light'
          type='search'
          placeholder='Course Code...'
          value={courses}
          onChange={handleInputChange}
        />
        <button onClick={() => addCourse(courses)}>Add Course</button>
      </div>
      <h3>Previous Courses</h3>
      <ul>
        {prevCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
      <h3> Requirements </h3>
      <div className='statusSheet'>
        <ul>
          {
            reqs.filter(x => x != null).map(({title, options, creditHours}) => (
              <li className="deg-name"><strong>{title}</strong>: {creditHours}
              <ul>
                  {
                    options.map(({title, options, creditHours}) => (
                      <li class="sec-name">
                      <input type="checkbox" id={"chck-" + title} name={"chck-" + title}/>
                      <label for={"chck-" + title}><em>{title}</em>: {creditHours}</label>
                      <div className='section'>
                        <ul>
                          {
                            options.map(({code, creditHours}) => (
                              <li>{code}: {creditHours}</li>
                            ))
                          }
                        </ul>
                      </div>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default StatusSheet;
