import style from "./UserTodo.module.css"
import UserTodoItem from "./userTodoItem/UserTodoItem";
import {useForm} from "react-hook-form";

function UserTodo(props) {

    const { register, handleSubmit, reset} = useForm({ mode: "onBlur"})

    const onSubmitHandler = (data) => {
       props.enterAddNewTodo(data)
        reset()
    }

    return (
        <div className={style.TodoStyle}>
            <h2 className={style.UserNameTitle}>список ващих дел {props.userPosts.user}</h2>
            <div className={style.InputArea}>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <input className={style.InputStyle}
                           {...register("userTodo",
                               {
                                   required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст,
                               }
                           )}
                           placeholder={props.placeholder}
                    />
                    <input type="submit" className={style.ButtonStyle}/>
                </form>
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