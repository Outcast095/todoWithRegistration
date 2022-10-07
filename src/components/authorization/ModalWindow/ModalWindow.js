
import styles from "./ModalWindow.module.css"
import ButtonStyle from "../../button/Button.module.css";

import { useNavigate } from "react-router-dom";



function ModalWindow() {

    const navigate = useNavigate()

    function returnToAuth () {
        navigate(`/`)
    }

    return (
        <div className={styles.ModalWrapperWindow}>
            <div className={styles.ModalBigWindow}></div>
            <div className={styles.ModalWindow}>
                <h2 className={styles.TextTitle}>поздравляю, вы успешно зарегистрировались !!!!</h2>

                <div>
                    <button onClick={returnToAuth} className={ButtonStyle.ButtonStyle}>перейти на страницу авторизации</button>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;