import {useState} from "react";

export default function useInput (initialValue, placeholder) {
    //// initialValue это тот текст что будет отображаться в самом начале
    //// placeholder это строка которая будет отображаться вместо placeholder
const [value, setValue] = useState(initialValue);   /// изначально в useState приходит параметр initialValue который должен быть равен либо
                                                      /// пустой строке, либо просто строке ста страка будет отображена в input

    const reset = event => {   //// функция которая возвращает состояние input в изначальное состояние
        setValue(initialValue)         /// после того как будет отработана функция reset value примет изначальное значение
    }

    const bind = {
        value: value,   /// параметр валуе
        onChange:  event => setValue(event.target.value),   /// параметр оnChange
        placeholder: placeholder   /// параметр placeholder принимается вторым в
    }

    return {reset, bind }
};