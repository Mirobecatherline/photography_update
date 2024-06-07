import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function Protectedroutradmin(props) {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('token');
        const currentuser = JSON.parse(localStorage.getItem('user')).role;
        if ((!userToken || userToken === 'undefined') && !(currentuser.role.includes('admin')) ) {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);
return (
    <React.Fragment>
        {
            isLoggedIn ? props.children : null
        }
    </React.Fragment>
)
}

export default Protectedroutradmin