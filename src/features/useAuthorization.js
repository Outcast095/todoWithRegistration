import {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function useAuthorization (userItem) {

    const navigate = useNavigate()
    const [authorizationPrivatePage, setAuthorizationPrivatePage] = useState(false) /// для разблокировки приватной страницы
    const [authorizeData, setAuthorizeData] = useState({}) /// для разблокировки приватной страницы
    const [userObj, setUserObj] = useState({}) /// для разблокировки приватной страницы


    const authorizationHandler = () => {
        let user = userItem()
        setAuthorizationPrivatePage(true)
        setAuthorizeData({log: user.user, pass: user.password})
        localStorage.setItem("userData", JSON.stringify(authorizeData))
        navigate(`/${user.user}`)
        setUserObj(user)
    }


    return {authorizationPrivatePage, userObj, authorizationHandler}
}


