

export default function useRegistration (inputLogin, inputPassword, changeUser, changePassword, createNewUser) {


    const registrationHandler = () => {
        if  (inputLogin && inputPassword) {
            createNewUser({
                "user": inputLogin,
                "password": inputPassword,
                "todos": []
            })
            changeUser("")
            changePassword("")
        } else {
            console.log("вы не ввели регистрационные данные")
        }
    }

    return {registrationHandler, inputLogin, inputPassword}
}


