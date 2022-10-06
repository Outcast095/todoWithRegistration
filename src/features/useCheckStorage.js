import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useCheckStorage (data, deleteUserTodo) {

    const navigate = useNavigate()
    const [storageUserData, setStorageUserData] = useState(false)
    const [checkStorageKey, setCheckStorageKey] = useState(false)

    let userData = localStorage.getItem("userData")
    let objectData = JSON.parse(userData)


    useEffect(() => {
        if (objectData){
            data.find(item => {
                if (item.user === objectData.login && String(item.password) === String(objectData.pass)){
                    navigate(`/${item.login}`)
                    setCheckStorageKey(true)
                    setStorageUserData(item)
                }
            })
        }
    }, [data, deleteUserTodo])

    return { storageUserData, checkStorageKey}
}
