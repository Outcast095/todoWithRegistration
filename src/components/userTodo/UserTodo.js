import styles from "./UserTodo.module.css"
import UserTodoItem from "./userTodoItem/UserTodoItem";

import {useForm} from "react-hook-form";
import useToggle from "../../features/useToggle";

function UserTodo(props) {

    const { register, handleSubmit, reset} = useForm({ mode: "onBlur"})
    const [value, toggle] = useToggle()


    const cls = [styles.Burger_btn]

    if (value) {
        cls.push(styles.active)
    }

    const onSubmitHandler = (data) => {
       props.enterAddNewTodo(data)
        reset()
    }

    return (
            <div className={styles.UserTodo}>
                    <div className={value ? styles.NavBarWrapper + " " + styles.NavBarWrapperActive : styles.NavBarWrapper}>
                        <div className={styles.SideBarWrapper}>
                            <div className={styles.SideBar}>
                                sdfsdf
                            </div>
                        </div>

                        <div className={styles.BurgerWrapper}>
                            <div className={cls.join(" ")} onClick={() => toggle()}>
                                <span/>
                            </div>
                        </div>
                    </div>

                <div className={styles.MainBlock}>
                    <h2 className={styles.UserNameTitle}>список ващих дел {props.userPosts.user}</h2>
                    <div>
                        <img src={props.userPosts} alt=""/>
                    </div>
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
                        {props.userPosts.todos.map(post => {
                        return <ul key={post.id}>
                            <UserTodoItem post={post.textTodo} id={post.id} buttonClickHandler={props.deleteTodo}/>
                        </ul>})}
                    </div>
                </div>
            </div>
    );
}

export default UserTodo;