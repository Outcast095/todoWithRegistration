import {useState} from "react";


export default function useGetLoginAndPassword () {

    const [user, setUser] = useState()

    function getLoginAndPassword (data) {
        console.log(data)
        console.log("getLoginAndPassword")
            setUser(data)
    }



    return { user, getLoginAndPassword }
}