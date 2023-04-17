import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
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
    <div>
      <h1>Home</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Home;