
export default function useFindUserFromData (userLogin = "", userPassword = "", dataQuery = false) {

    console.log(userLogin)
    console.log(userPassword)

    function FindUserFromData () {
        console.log("сработало")
            return  dataQuery.find(item  => item.user === userLogin && String(item.password) === String(userPassword))

    }

    return { FindUserFromData }
}

