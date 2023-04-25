import React, { useState } from "react";
import Course from '../Components/Course'
import NavBar from '../Components/NavBar';

const SchedulerPage = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(!showComponent);
      };

    return (
        <div>
            <div className = "page-title">
                <h2>Search</h2>
            </div>
            <div>
            <button onClick={handleClick}>Show Component</button>
            {showComponent && <Course />}
            </div>
        </div>
    )
}

export default SchedulerPage;