import {useState} from "react";


export default function useGetLoginAndPassword () {

    const [user, setUser] = useState()

    function getLoginAndPassword (data) {
            setUser(data)
    }



    return { user, getLoginAndPassword }
}