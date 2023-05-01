import React, { useRef, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errMsg, setErrMsg] = useState('')
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')

  const errRef = useRef()
  const userRef = useRef()
  const navigate = useNavigate();

  function login() {
    axios.post('http://localhost:8080/api/login', {
      username: user,
      password: pwd
    })
      .then(response => {
        // Handle the response data here
        console.log(response)
        if (response.data === 'student') {
          navigate('/StudentHome')
        } else if (response.data === 'admin') {
          navigate('/AdminHome')
        } else { setErrMsg("INVALID LOGIN") }
      })
      .catch(error => {
        // Handle the error here
        console.log(error)
      });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    login()
  }

  return (
    <section>
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor='username'>Username:</label>
        <input
          className='text-black border-solid border-2 border-grey-light'
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
          className='text-black border-solid border-2 border-grey-light'
          type='password'
          id='password'
          autoComplete='off'
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button className='bg-green-600 m-2 w-100 rounded-none'>Sign In</button>
      </form>
    </section>
  )
}

export default Login