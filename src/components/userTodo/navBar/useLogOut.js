import { useNavigate } from "react-router-dom";

export default function useLogOut () {

    const navigate = useNavigate()

    function LogOut () {
        localStorage.removeItem("userData")
        navigate(`/`)
    }

    return {LogOut}
}