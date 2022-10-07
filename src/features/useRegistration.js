import { useNavigate } from "react-router-dom";
import {useState} from "react";

export default function useRegistration (createNewUser, data) {

    const [registrationCheck, setRegistrationCheck] = useState(false)


    function registrationHandler (registrationData) {

      let CheckRegistrationData =  data.find(item  => item.login === registrationData.userLogin && String(item.password) === String(registrationData.userPassword))


        if (CheckRegistrationData === undefined) {

            createNewUser({
                "login": registrationData.userLogin,
                "password": registrationData.userPassword,
                "name": registrationData.userName || "имя не введено",
                "sureName": registrationData.userSureName || "фамилия не введена",
                "phoneNumber": registrationData.userPhoneNumber || "номер телефона не введен",
                "email": registrationData.userEmail || "Эмейл не введен",

                "todos": []
            })
            setRegistrationCheck(true)
        }

    }

    return { registrationHandler, registrationCheck }
}

/*


 */