import { useState } from "react";

export default function useFindUserFromData (userLogin = "", userPassword = "", setLogin, setPassword, dataQuery = false) {

    const [user, setUser] = useState()

    function FindUserFromData (userLogin = "", userPassword = "", setLogin, setPassword, dataQuery = false) {

        if (userLogin && userPassword) {
            let userItem = null;
            return  userItem = dataQuery.find(item  => item.user === userLogin && String(item.password) === String(userPassword))
            if (!userItem) {
                console.log("Вы ввели неверный логин или пароль")
                setLogin("")
                setPassword("")
            }
        } else {
            console.log("Вы не введли логин и пароль")
        }
    }


    return { FindUserFromData, userLogin, userPassword, user }
}

