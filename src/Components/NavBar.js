import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Styling/NavBarStyles.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <h1>NEMO Scheduler</h1>
        <div><Link to='/'>Landing Page</Link></div>
        <div><Link to='/StudentHome'>Student Home</Link></div>
        <div><Link to='/AdminHome'>Admin Home</Link></div>
        <div><Link to='/SchedulerPage'>Scheduler Page</Link></div>
        <div><Link to='/'>Login</Link></div>
      </nav>
    );
  }
}

export default NavBar;