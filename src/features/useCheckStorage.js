import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useCheckStorage (data, addNewTodo) {

    const navigate = useNavigate()
    const [user, setUser] = useState(false)
    const [privatePage, setPrivatePage] = useState(false)

    let userData = localStorage.getItem("userData")
    let objectData = JSON.parse(userData)


    useEffect(() => {
        if (objectData){
            data.find(item => {
                if (item.user === objectData.log && String(item.password) === String(objectData.pass)){

                    navigate(`/${item.user}`)
                    setPrivatePage(true)
                    setUser(item)
                } else {
                    console.log("LocalStorage не сработал")
                }
            })
        }
    }, [data, addNewTodo])
    console.log("useCheckStorage", user)
    return {user, privatePage}
}
