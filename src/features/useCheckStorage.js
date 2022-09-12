import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useCheckStorage (data) {

    const navigate = useNavigate()
    const [user, setUser] = useState(false)
    const [checkStoragePrivatePage, setCheckStoragePrivatePage] = useState(false)

    let userData = localStorage.getItem("userData")
    let objectData = JSON.parse(userData)


    useEffect(() => {
        if (objectData){
            data.find(item => {
                if (item.user === objectData.log && String(item.password) === String(objectData.pass)){

                    navigate(`/${item.user}`)
                    setCheckStoragePrivatePage(true)
                    setUser(item)
                } else {
                    console.log("LocalStorage не сработал")
                }
            })
        }
    }, [data])

    return {user, checkStoragePrivatePage}
}
