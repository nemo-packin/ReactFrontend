import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RequireAuth = () => {
    const [ auth, setAuth ] = useState(false);
    const location = useLocation();

    useEffect(() => { // Use useEffect to fetch data and update auth state
        function authenticate() {
            let isAuth = false
            axios.get('http://localhost:8080/api/auth')
                .then(response => {
                    // Handles the response
                    if (response.data === true) {
                        isAuth = true;
                        console.log(`isAuth1: ${isAuth}`)
                    } 
                })
                .catch(error => {
                    // Handle the error here
                    console.log(error);
                });
            setAuth(isAuth);
            console.log(`isAuth: ${isAuth}`)
        }

        authenticate(); // Call the authenticate function
        console.log(`Test: ${auth}`)
    }, []); // Empty array as dependency to run effect only once

    return (
        <>
            {console.log("Here!")}
            {console.log(auth)}
            {auth ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />}
        </>
    )
}

export default RequireAuth;