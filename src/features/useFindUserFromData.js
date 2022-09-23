import {useMemo, useState} from "react";


export default function useFindUserFromData (user = null, dataQuery = false) {


    function findUserFromData (userLogin, userPassword, dataQuery) {
        return  dataQuery.find(item  => item.user === userLogin && String(item.password) === String(userPassword))
    }



    let userObjectFromData;

    if (user !== null) {
        userObjectFromData =  findUserFromData(user.userLogin, user.userPassword, dataQuery)
    }


    return { userObjectFromData }
}

