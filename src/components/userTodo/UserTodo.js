import React from 'react';
import style from "./UserTodo.module.css"
import UserTodoItem from "./userTodoItem/UserTodoItem";
import Input from "../input/Input";
import Button from "../button/Button";

function UserTodo(props) {
    return (
        <div className={style.TodoStyle}>
            <h2 className={style.UserNameTitle}>список ващих дел {props.username}</h2>
            <div className={style.InputArea}>
                <Input value={props.valueTodo} type="text" placeholder={props.placeholder} enterTextHandler={props.enterTextHandlerTodo}/>
                <Button buttonText={props.buttonText} buttonClickHandler={props.buttonClickHandler} />
            </div>
            <div>{props.userPosts.todos.map(post => {
                        return <ul key={post.id}>
                            <UserTodoItem post={post.textTodo} />
                        </ul>})
            }</div>
        </div>
    );
}

export default UserTodo;