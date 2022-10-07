import { useNavigate } from "react-router-dom";
import {useState} from "react";

export default function useRegistration (createNewUser) {

    const navigate = useNavigate()
    const [registrationKey, setRegistrationKey] = useState(false)

    function registrationHandler (data) {




            createNewUser({
                "login": data.userLogin,
                "password": data.userPassword,
                "name": data.userName || "имя не введено",
                "sureName": data.userSureName || "фамилия не введена",
                "phoneNumber": data.userPhoneNumber || "номер телефона не введен",
                "email": data.userEmail || "Эмейл не введен",

                "todos": []
            })
    }

    return { registrationHandler, registrationKey }
}

