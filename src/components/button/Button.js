import React from 'react';
import style from "./Button.module.css"

function Button(props) {
    return (
        <button
            className={style.ButtonStyle}
            onClick={props.buttonClickHandler}
        >
            {props.buttonText}
        </button>
    );
}
export default Button;