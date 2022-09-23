import styles from "./Authorization.module.css"
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import stile from "../input/Input.module.css";





function Authorization(props) {

    const { register, handleSubmit, reset} = useForm({ mode: "onBlur"})


    const onSubmitHandler = (data) => {
        console.log(data)
        props.enterTextHandler(data)
        reset()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.AuthorizationStyles}>
                <div className={styles.inputArea}>
                    <h3 style={{color: "#d3cbcb"}}>{props.title}</h3>

                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <input className={stile.InputStyle}
                               {...register("userLogin",
                                   {
                                       required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                                       minLength: {
                                           value: 5,
                                           message: "слишком короткая строка"
                                       },
                                   }
                               )}
                               placeholder={props.placeholder}
                        />

                        <input className={stile.InputStyle}
                               {...register("userPassword", {
                               required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                                   minLength: {
                                   value: 2,
                                   message: "слишком короткая строка"
                                   },
                               })
                             }
                               placeholder={props.placeholder}
                        />
                        <input type="submit"/>
                    </form>
                    
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


