
import styles from "./checkBox.module.css";


import useCheckerToggle from "./useCheckerToggle";


function CheckBox () {

    const [value, toggle ] = useCheckerToggle(false)

    return (
        <div className={styles.CheckBox__Container}>
            <div className={styles.CheckBox}>
                <div onClick={toggle} className={value ? styles.Checker + " " + styles.CheckerActive : styles.Checker}></div>
            </div>
            <h3 className={styles.Title} >заполнить форму полностью</h3>
        </div>
    );
}

export default CheckBox;