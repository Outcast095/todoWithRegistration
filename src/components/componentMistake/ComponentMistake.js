import React from 'react';
import style from "./ComponentMistake.module.css"

function ComponentMistake(props) {

    return (
        <div>
            <h2 className={style.AuthorizationStyles}>
                {props.text}
            </h2>
        </div>

    );
}

export default ComponentMistake;

