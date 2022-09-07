import React from 'react';
import { Navigate } from "react-router-dom";


function PrivateHok({children, privatePageKey}) {
    if (!privatePageKey) {
            return <Navigate to="/FalseCom"/>
    } else {
        return children
    }

}

export {PrivateHok};