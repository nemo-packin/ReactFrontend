import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Login from '../Components/Login';

const LandingPage = () => {
  const [greeting, setGreeting] = useState('')
  const [login, setLogin] = useState(false)

  useEffect(() => {
    // Fetch data from backend API when component mounts
    axios.get('http://localhost:8080/')
      .then(response => {
        setGreeting(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='content-center'>
      <h1>LandingPage</h1>
      <p>{greeting}</p>
      <h2>Pages you can go to!</h2>
      <div><Link to='/Home'>Home</Link></div>
      <div><Link to='/AdminHome'>Admin Home</Link></div>
      <div><Link to='/SchedulerPage'>SchedulerPage</Link></div>
      <button onClick={() => { setLogin(!login) }}>sign in</button>
      <>
        {login ? <Login/> : <></>}
      </>
    </div>
  );
};

export default LandingPage;