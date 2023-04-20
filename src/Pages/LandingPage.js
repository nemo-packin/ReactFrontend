import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';

const LandingPage = () => {
  const [greeting, setGreeting] = useState('');

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
    </div>
  );
};

export default LandingPage;