import React, { useState } from "react";
import Course from '../Components/Course'
import SearchBox from "../Components/SearchBox";

const SchedulerPage = () => {
    const [showComponent, setShowComponent] = useState(false);

    return (
        <div>
            <div className = "page-title">
                <h2>Search</h2>
            </div>
            <SearchBox/>
            <div>
            <button onClick={() => setShowComponent(!showComponent)}>Show Component</button>
            {showComponent && <Course />}
            </div>
        </div>
    )
}

export default SchedulerPage;