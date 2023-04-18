import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Course from '../Components/Course'

const SchedulerPage = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(!showComponent);
      };

    return (
        <div>
            <div><Link to='/'>Landing Page</Link></div>
            <div><Link to='/Home'>Student Home</Link></div>
            <div><Link to='/AdminHome'>Admin Home</Link></div>  
            <p>Search Stuff Here!</p>

            <div>
            <button onClick={handleClick}>Show Component</button>
            {showComponent && <Course />}
            </div>
        </div>
    )
}

export default SchedulerPage;