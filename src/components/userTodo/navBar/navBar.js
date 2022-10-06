import styles from "./NavBar.module.css";

//////////////////////////customHooks/////////////////////////////////////////////////
import useBurgerToggle from "../useBurgerToggle";
import useLogOut from "./useLogOut";


function NavBar(props) {

    const { LogOut } = useLogOut()
    const [value, toggle] = useBurgerToggle()

    const cls = [styles.Burger_btn]

    if (value) {
        cls.push(styles.active)
    }



    return (
        <div className={value ? styles.NavBarWrapper + " " + styles.NavBarWrapperActive : styles.NavBarWrapper}>
            <div className={styles.SideBarWrapper}>
                <div className={styles.SideBar}>
                    <div>
                        <h3>{props.user.login}</h3>
                        <h3>{props.user.password}</h3>

                        <div>
                            <button onClick={LogOut}> Выйти из учетной записи</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.BurgerWrapper}>
                <div className={cls.join(" ")} onClick={() => toggle()}>
                    <span/>
                </div>
            </div>
        </div>
    );
}

export default NavBar;