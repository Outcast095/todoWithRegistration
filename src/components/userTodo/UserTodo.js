import styles from "./UserTodo.module.css"
import {useForm} from "react-hook-form";



////////////////////////////components/////////////////////////////////////////////////
import NavBar from "./navBar/NavBar";
import UserTodoItem from "./userTodoItem/UserTodoItem";

function UserTodo(props) {

    const { register, handleSubmit, reset} = useForm({ mode: "onBlur"})

    const onSubmitHandler = (data) => {
       props.enterAddNewTodo(data)
        reset()
    }

    return (
            <div className={styles.UserTodo}>
                <div>
                    <NavBar user={props.user}/>
                </div>
                <div className={styles.MainBlock}>
                    <h2 className={styles.UserNameTitle}>список ващих дел {props.user.login}</h2>
                    <div className={styles.InputArea}>
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <input className={styles.InputStyle}
                                   {...register("userTodo",
                                       {
                                           required: "поле объязательно для заполнения",
                                       }
                                   )}
                                   placeholder={props.placeholder}
                            />
                            <input type="submit" className={styles.ButtonStyle}/>
                        </form>
                    </div>
                    <div className={styles.TodosList}>
                        {props.user.todos.map(post => {
                        return <ul className={styles.TodosListItems} key={post.id}>
                            <UserTodoItem post={post.textTodo} id={post.id} buttonClickHandler={props.deleteTodo}/>
                        </ul>})}
                    </div>
                </div>
            </div>
    );
}

export default UserTodo;