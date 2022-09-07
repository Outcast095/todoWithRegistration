import React, {useState} from 'react';
import stile from "./Input.module.css"



function Input({placeholder, enterTextHandler, value}) {


    const textChangeHandler = (event) => {
        enterTextHandler(event.target.value)
    }

    return (
        <input
            className={stile.InputStyle}
            placeholder={placeholder}
            onChange={textChangeHandler}
            value={value}
        />
    );
}

export default Input;
