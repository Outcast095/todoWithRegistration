import {useState} from "react";


export default function useGetLoginAndPassword () {

    const [login, setLogin] = useState("")  /// для управления состоянием логина по умолчанию равен 0
    const [password, setPassword] = useState("") /// для управления состоянием пароля по умолчанию равен 0


    if (login && password) {
        return {login, password, setLogin, setPassword}
    } else {
        console.log("вы не заполнили поле логин или пароль")
        return {login, password, setLogin, setPassword}
    }
}