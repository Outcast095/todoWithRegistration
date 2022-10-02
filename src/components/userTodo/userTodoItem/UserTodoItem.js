import styles from "./UserTodoItem.module.css";
import trash from "../../../images/icons/trash.svg"

function UserTodoItem(props) {
    return (
        <li className={styles.TodoItem}>
            <div className={styles.wrapper}>
                <div className={styles.TodoItemWrapper}><p className={styles.TodoItemText}>{props.post}</p></div>
                <div className={styles.ButtonWrapper}>
                    <button className={styles.ButtonStyle} onClick={() => props.buttonClickHandler(props.id)}>
                        <img className={styles.TrashIcon} src={trash} alt=""/>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default UserTodoItem;