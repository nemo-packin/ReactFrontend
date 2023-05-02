import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavBar = (props) => {
  const navigate = useNavigate()

  async function changePage(page) {
    if (page === '/') {
      navigate(page)
    }
    axios.get("http://localhost:8080/api/userType")
      .then((auth) => {
        if (auth.data === 'student' && (page === '/StudentHome' || page === '/CourseSearch')) {
          navigate(page)
        } else if (auth.data === 'admin' && page === '/AdminHome') {
          navigate(page)
        }
      })
      .catch((error) => {
        console.log(error)
      })


  }

  return (
    <nav className="bg-red-600">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-white text-xl font-bold">NEMO Scheduler</h1>
          </div>
          <div className="flex">
            {props.userType === '' ? (
              <button onClick={() => { changePage("/") }} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">Login</button>
            ) : (
              props.userType === 'student' ? (
                <>
                  <button onClick={() => { changePage("/StudentHome") }} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">Student Home</button>
                  <button onClick={() => { changePage("/CourseSearch") }} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">Search Page</button>
                  <button onClick={() => { changePage("/") }} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">Login</button>
                </>
              ) : (
                <>
                  <button onClick={() => { changePage("/AdminHome") }} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">Admin Home</button>
                  <button onClick={() => { changePage("/") }} className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white">Login</button>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;