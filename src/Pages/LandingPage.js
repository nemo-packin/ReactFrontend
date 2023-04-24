import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar';
import Login from '../Components/Login';
import Register from '../Components/Register';

const LandingPage = () => {
  const [greeting, setGreeting] = useState('')
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

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
      <NavBar/>
      <div className = "page-title">
          <h2>Landing Page</h2>
      </div>
      <p>{greeting}</p>
      <h2>Pages you can go to!</h2>
      <div><Link to='/StudentHome'>Home</Link></div>
      <div><Link to='/AdminHome'>Admin Home</Link></div>
      <div><Link to='/SchedulerPage'>SchedulerPage</Link></div>
      <button onClick={() => {setLogin(!login)}}>Sign in</button>
      <>
        {login ? <Login/> : <></>}
      </>
      <button onClick={() => {setRegister(!register)}}>Register</button>
      <>
        {register ? <Register/> : <></>}
      </>
      
    </div>
  );
};

export default LandingPage;