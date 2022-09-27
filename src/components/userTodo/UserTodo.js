import styles from "./UserTodo.module.css"
import UserTodoItem from "./userTodoItem/UserTodoItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {useForm} from "react-hook-form";
import useToggle from "../../features/useToggle";

function UserTodo(props) {

    const { register, handleSubmit, reset} = useForm({ mode: "onBlur"})
    const [value, toggle] = useToggle()


    const cls = [styles.Burger]

    if (value) {
        cls.push(styles.active)
    }

    const onSubmitHandler = (data) => {
       props.enterAddNewTodo(data)
        reset()
    }

    return (
        <div className={styles.TodoStyle}>
            <div className={value ? styles.Sidebar : ""}>

            </div>
            <div className={styles.MainBlock}>
                <div onClick={() => toggle()}>
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                    <img className={cls.join(" ")} src="https://img.icons8.com/external-others-bomsymbols-/30/40C057/external-hamberger-flat-general-office-others-bomsymbols-.png"/>
                </div>

                <h2 className={styles.UserNameTitle}>список ващих дел {props.userPosts.user}</h2>
                <div className={styles.InputArea}>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <input className={styles.InputStyle}
                               {...register("userTodo",
                                   {
                                       required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст,
                                   }
                               )}
                               placeholder={props.placeholder}
                        />
                        <input type="submit" className={styles.ButtonStyle}/>
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