import { useNavigate } from "react-router-dom";
import {useMemo, useState} from "react";



export default function useAuthorization (userObjectFromData = null) {

     const [authorizationKey, setAuthorizationKey] = useState(false)
     const navigate = useNavigate()


    function authorizationHandler (userItem) {
         if (userItem !== null) {
             localStorage.setItem("userData", JSON.stringify({log: userItem.user, pass: userItem.password}))
             navigate(`/${userItem.user}`)
             setAuthorizationKey(true)
             return userItem
         }
    }

    const userData = useMemo(() => authorizationHandler(userObjectFromData), [userObjectFromData])



    return { userData, authorizationKey }
}


