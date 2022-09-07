import { useState, useEffect } from "react";

export default function useLocalStorage (initialValue, key) {  /// initialValue мы присваиваем пустой массив,
    ///key мы присваиваем строку


    const getValue = () => {
        const storage = localStorage.getItem(key);  ////   тут мы получаем данные второго параметра key
        /// и передаем их в переменную storage в которой у наc будет хранится либо какая то стока либо null /// string || null

        if (storage) {   //// если в storage пришла строка это значит что в localStorage есть объект и выполнится условие
            return JSON.parse(storage);   /// JSON.parse этот метод превращает JSON строку в объект.
            // функция  getValue вернет объект хранившийся в localStorage в хук useState на 20 строку как начальное состояние данного хука
        }

        return initialValue;   /// если в storage ничего не было, выполнится это условие и функция  getValue вернет
                               /// в хук useState на 20 строку как начальное состояние данного хука пустой массив initialValue
    }


    const [value, setValue] = useState(getValue); ////  в переменной value будет либо пустой массив, либо объект из localStorage

    useEffect(() => {   ///  если в value произойдут изменения то эти мзменения под ключем переданным в параметре key будут записаны в localStorage
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]   //// возвращаются параметры value которая хранит либо объект из localStorage либо пустой массив
                                //// setValue при помощи которого в localStorage подключем key можно что то добавить
}



//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
import useLocalStorage from "../Hook/useLocalStorage";  ///// импортируем наш хук


cons const [order, setOrder] = useLocalStorage([], "order")  //// декомпозиция хука  в круглые скобки передается два значения
хук принимает два значения, initialValue если в localStorage ничего нет, и если localStorage чем то заполнен
в зависимости от второго параметра он




const addToOrder = (id) => {                                 //// эта функция поиска объекта в массиве объектов по id
    const newItem = array.find( item => { item.id === id} )  /// в случае если елемент массивф array объект обладает
                                                            ///id равным id полученным в параметре функции  этот элемент массива *объект будет возвращен

    setOrder([...order], newItem)                           /// в нашей функции которую мы получили из кастомного хука мы дописываем
      }                                                          ////иммутабельным методом дополнительный параметр и сохраняем его в localStorage
}

 */