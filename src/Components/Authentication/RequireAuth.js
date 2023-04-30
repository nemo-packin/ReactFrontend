import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RequireAuth = ({userType}) => {
    const [auth, setAuth] = useState(true);
    const location = useLocation();

    // Use useEffect to fetch data and update auth state
    useEffect(() => { 
        (async () => {
            try {
                const authResponse = await axios.get('http://localhost:8080/api/auth');
                const userTypeResponse = await axios.get('http://localhost:8080/api/userType')
                if(!(authResponse.data === true && userType === 'student' && userTypeResponse.data === 'student') && 
                !(authResponse.data === true && userType === 'admin' && userTypeResponse.data === 'admin')){
                    setAuth(false);
                }
            } catch (err) {
                console.log('Error occured when fetching login information');
            }
        })();
    }, [userType]); // Empty array as dependency to run effect only once

    return (
        <>
            {auth ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />}
        </>
    )
}

export default RequireAuth;