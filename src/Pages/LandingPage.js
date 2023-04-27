import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

  function logout(){
    axios.post('http://localhost:8080/api/logout')
    console.log("You're logged out!")
  }

  return (
    <div className='content-center'>
      <div className = "page-title">
          <h2>Landing Page</h2>
      </div>
      <p>{greeting}</p>
      <button onClick={() => {setLogin(!login)}}>Sign in</button>
      <>
        {login ? <Login/> : <></>}
      </>
      <button onClick={() => {setRegister(!register)}}>Register</button>
      <>
        {register ? <Register/> : <></>}
      </>
      <button onClick={() => {logout()}}>Logout</button>
      
    </div>
  );
};

export default LandingPage;