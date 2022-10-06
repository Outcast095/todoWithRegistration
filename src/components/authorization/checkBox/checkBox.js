import styles from "./checkBox.module.css";



function CheckBox (props) {



    return (
        <div className={styles.CheckBox__Container}>
            <div className={styles.CheckBox}>
                <div onClick={props.toggle} className={props.value ? styles.Checker + " " + styles.CheckerActive : styles.Checker}></div>
            </div>
            <h3 className={styles.Title} >заполнить форму полностью</h3>
        </div>
    );
}

export default CheckBox;