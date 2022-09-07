import {useEffect, useState} from "react";

export default function useRequest (request) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=> {
        setLoading(true)
        request()
            .then( response => setData(response.data))
            .catch( error => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return [data, loading, error]
};



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///хук для обработки ассинхронных данных
/*
import useRequest from "../Hook/useLocalStorage";  ///// импортируем наш хук


const [data, loading, error] = useRequest(fetchTodos)    //// вызываем хук и декомпозируем его
/// в круглые скобки добавляем асинхронную функцию которая получает данные с сервера
// параметр data отрабатывает в случае успешной загрузки данных с сервера
// параметр error отрабатывает и вернет true  в случае ошибки на сервере
// параметр loading отрабатывает и вернет true  в случае задержки обработки данных



function fetchTodos () {         //// наша ассинхронная функция которую мы как параметр передаем в наш хук
    return axios.get("http://localhost:3001/")
}


if (loading) {   /// в случае задержки сервера отработает данное условие
    return <h1>Идет загрузка .....</h1>
}

 */





