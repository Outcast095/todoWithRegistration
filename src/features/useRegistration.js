

export default function useRegistration (createNewUser) {


    function registrationHandler (data) {

            createNewUser({
                "user": "",
                "password": "",
                "todos": []
            })
    }

    return { registrationHandler }
}

