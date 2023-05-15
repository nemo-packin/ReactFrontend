import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styling/LandingPageStyles.css";
import Login from '../Components/Authentication/Login';
import Register from '../Components/Authentication/Register';
import NavBar from '../Components/NavBar';

const LandingPage = () => {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [logoutMsg, setLogoutMsg] = useState(false)

  function logout() {
    axios.post('http://localhost:8080/api/logout')
    setLogoutMsg(true)
  }

  return (
    <>
      <NavBar userType=''/>
      <div className='content-center'>
        <div className="page-title">
          <h1>Login Page</h1>
        </div>
        {/* <p>{greeting}</p> */}
        <button className='bg-red-600 m-2 w-100 rounded-none' onClick={() => {
          setLogoutMsg(false)
          setLogin(!login)
        }}>Sign in</button>
        <>
          {login ? <Login /> : <></>}
        </>
        <button className='bg-red-600 m-2 w-100 rounded-none' onClick={() => { setRegister(!register) }}>Register</button>
        <>
          {register ? <Register /> : <></>}
        </>
        <button className='bg-red-600 m-2 w-100 rounded-none' onClick={() => { logout() }}>Logout</button>
        {logoutMsg ? <p>You logout out!</p> : <></>}

      </div>
    </>

  );
};

export default LandingPage;