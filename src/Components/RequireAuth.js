import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RequireAuth = () => {
    const [auth, setAuth] = useState(true);
    const location = useLocation();

    useEffect(() => { // Use useEffect to fetch data and update auth state
        (async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/auth');
                console.log(`Beginning: ${response.data}`)
                setAuth(response.data);
            } catch (err) {
                console.log('Error occured when fetching books');
            }
        })();
    }, []); // Empty array as dependency to run effect only once

    return (
        <>
            {console.log(`END: ${auth}`)}
            {/* {setAuth(true)} */}
            {auth ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />}
        </>
    )
}

export default RequireAuth;