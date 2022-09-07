import {useState} from "react";
import { useNavigate } from "react-router-dom";


export default function useAuthorization (userHandler, userItem) {



    const navigate = useNavigate()
    const [privatePage, setPrivatePage] = useState(false) /// для разблокировки приватной страницы
    const [authorizeData, setAuthorizeData] = useState({}) /// для разблокировки приватной страницы


/*
    const IsUserFromData = (dataItem, authorizeData) => {
        setPrivatePage(true)
        localStorage.setItem("userData", JSON.stringify(authorizeData))
        navigate(`/${dataItem.user}`)
    }
    */


    const authorizationHandler = (userHandler, setPrivatePage, setAuthorizeData, authorizeData, navigate, userItem) => {
        userHandler()
        setPrivatePage(true)
        setAuthorizeData({log: userItem.user, pass: userItem.password})
        localStorage.setItem("userData", JSON.stringify(authorizeData))
        navigate(`/${userItem.user}`)
    }


    return {privatePage, userItem, authorizationHandler}
}


