
import { useState } from "react";


export default function useAddNewTodo ( addTodo, userItem ) {

    const [todo, setTodo] = useState("")
    console.log("useAddNewTodo", userItem)

    const addNewTodo = () => {
        console.log("click")
        addTodo({...userItem, "todos": [...userItem.todos, {id: new Date().toISOString(), "textTodo": todo}]})
        setTodo("")
    }
    return {addNewTodo, todo, setTodo}
}
