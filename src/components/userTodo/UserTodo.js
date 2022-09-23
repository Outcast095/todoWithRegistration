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
            <div className={style.SydeBar}>
            </div>
            <div className={style.MainBlock}>
                <div className={style.Burger} onClick={() => console.log("click")}>
                    <img src="https://img.icons8.com/external-others-bomsymbols-/30/40C057/external-hamberger-flat-general-office-others-bomsymbols-.png"/>
                </div>

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
        </div>
    );
}

export default UserTodo;