import React from 'react';
import style from "./UserTodoItem.module.css"

function UserTodoItem(props) {
    return (
        <li className={style.TodoItem}>
            {props.post}
        </li>
    );
}

export default UserTodoItem;