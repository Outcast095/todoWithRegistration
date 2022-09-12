import styles from "./Authorization.module.css"
import Input from "../input/Input";
import Button from "../button/Button";
import { Link } from "react-router-dom";



function Authorization(props) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.AuthorizationStyles}>
                <div className={styles.inputArea}>
                    <h3 style={{color: "#d3cbcb"}}>{props.title}</h3>
                    <Input
                           placeholder={props.placeholderLogin}
                           enterTextHandler={props.enterTextHandlerLogin}
                           handleSubmit={props.handleSubmit}
                           onSubmitHandler={props.onSubmitHandler}
                           register={props.register}
                           inputName={props.inputName}
                    />
                    <Input type="text" value={props.valuePassword} placeholder={props.placeholderLogin} enterTextHandler={props.enterTextHandlerPassword}/>
                    <Button buttonText={props.buttonText} buttonClickHandler={props.buttonClickHandler}/>
                </div>
                <div>
                    {props.link
                        ? <h2 style={{color: "#a49c9c"}}>зарегистрироваться можно
                            {<Link style={{textDecoration: "none"}} to="registration"> здесь</Link> }</h2>
                        : ""}
                </div>
            </div>
        </div>

    );
}

export default Authorization;

