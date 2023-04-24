import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';

const Login = () => {
  const [errMsg, setErrMsg] = useState('')
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')

  const errRef = useRef()
  const userRef = useRef()

  function authenticate() {
    axios.get('http://localhost:8080/api/auth')
      .then(response => {
        // Handle the response data here
      })
      .catch(error => {
        // Handle the error here
      });
  }

  function login() {
    axios.post('http://localhost:8080/api/login', {
      username: user,
      password: pwd
    })
      .then(response => {
        // Handle the response data here
        console.log(response)
        
      })
      .catch(error => {
        // Handle the error here
        console.log(error)
      });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    login()
    console.log("Successful login!")

  }

  return (
    <section>
      <section>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor='username'>Username:</label>
          <input
            className='text-black'
            type='text'
            id='username'
            ref={userRef}
            autoComplete='off'
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor='password'>Password:</label>
          <input
            className='text-black'
            type='password'
            id='password'
            autoComplete='off'
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <button>Sign In</button>
        </form>
      </section>
    </section>
  )
}

export default Login