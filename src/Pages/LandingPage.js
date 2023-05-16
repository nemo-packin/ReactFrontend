import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Styling/LandingPageStyles.css";
import Login from '../Components/Authentication/Login';
import NavBar from '../Components/NavBar';

const LandingPage = () => {

  return (
    <>
      <NavBar userType=''/>
      <div className='content-center '>
        <div className="page-title">
          <h1 className='text-center'>Login Page</h1>
        </div>
        <Login /> 
      </div>
    </>

  );
};

export default LandingPage;