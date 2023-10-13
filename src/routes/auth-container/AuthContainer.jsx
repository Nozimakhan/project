import React, { useState, useLayoutEffect } from 'react'
import { instance } from '../../api/axios';
import { useDispatch } from 'react-redux';
import { Outlet} from 'react-router-dom';

const AuthContainer = () => {
    const dispatch = useDispatch();
    const [isTokenValid, setIsTokenValid] = useState(false);
    useLayoutEffect(() => {
        instance("/validation/validate-token",
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("access-admin-token")
                }
            })
            .then(response => {
                if (response.status === 200) {
                    setIsTokenValid(true);
                    console.log("ok")
                }
            })
            .catch(err => {
                if (err.response.status === 401 || err.response.status === 403) {
                    setIsTokenValid(false);
                    dispatch({ type: "LOGOUT" })
                }
            })
    })
    return (
        <div>
            {isTokenValid && <Outlet />}
        </div>
    )
}

export default AuthContainer