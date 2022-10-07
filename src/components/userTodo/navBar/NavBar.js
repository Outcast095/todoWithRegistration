import styles from "./NavBar.module.css";
import buttonStyles from "../../button/Button.module.css"

//////////////////////////customHooks/////////////////////////////////////////////////
import useBurgerToggle from "../useBurgerToggle";
import useLogOut from "./useLogOut";


function NavBar(props) {

    const { LogOut } = useLogOut()

    const cls = [styles.Burger_btn]

    if (props.value) {
        cls.push(styles.active)
    }



    return (

            <div className={props.value ? styles.NavBarWrapper + " " + styles.NavBarWrapperActive : styles.NavBarWrapper}>
                <div className={styles.SideBarWrapper}>
                        <div>
                            <div className={styles.UserDataContainer}>
                                <h3>{props.user.name}</h3>
                                <h3>{props.user.sureName}</h3>
                                <h3>{props.user.phoneNumber}</h3>
                                <h3>{props.user.email}</h3>
                            </div>

                            <div className={buttonStyles.ButtonContainer}>
                                <button className={buttonStyles.ButtonStyle} onClick={LogOut}>выйти из учетной записи</button>
                            </div>
                        </div>
                </div>

                <div className={styles.BurgerWrapper}>
                    <div className={cls.join(" ")} onClick={() => props.toggle()}>
                        <span/>
                    </div>
                </div>
            </div>
    );
}

export default NavBar;