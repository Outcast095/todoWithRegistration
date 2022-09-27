import styles from "./UserTodoItem.module.css"

function UserTodoItem(props) {
    return (
        <li className={styles.TodoItem}>
            <div className={styles.wrapper}>
                <div>{props.post}</div>
                <div className={styles.ButtonWrapper}><button className={styles.ButtonStyle}></button></div>
            </div>
        </li>
    );
}

export default UserTodoItem;