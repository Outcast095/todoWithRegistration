

export default function useRegistration (createNewUser) {


    function registrationHandler (data) {

            createNewUser({
                "login": data.userLogin,
                "password": data.userPassword,
                "name": data.userName || "имя не введено",
                "SureName": data.userSureName || "фамилия не введена",
                "userPhoneNumber": data.userPhoneNumber || "номер телефона не введен",
                "Email": data.userEmail || "Эмейл не введен",

                "todos": []
            })
    }

    return { registrationHandler }
}

