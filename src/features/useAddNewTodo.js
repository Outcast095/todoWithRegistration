
export default function useAddNewTodo ( addTodo, userItem ) {

    function addNewTodo (newTodo) {
        console.log(newTodo)
        addTodo({...userItem, "todos": [...userItem.todos, {id: new Date().toISOString(), "textTodo": newTodo.userTodo}]})
    }
    return { addNewTodo }
}
