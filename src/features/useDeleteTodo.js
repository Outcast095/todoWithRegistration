

export default function useDeleteTodo (deleteTodo, userItem) {


    function deleteUserTodo (todoID) {

          let NewTodosArr = userItem.todos.filter((todo) => {
                return todo.id !== todoID
            })

        deleteTodo({...userItem, "todos": [...NewTodosArr]})

    }

    return { deleteUserTodo }
}
