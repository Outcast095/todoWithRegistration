import styles from "./Authorization.module.css"
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";





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
                    <h3 className={styles.Title} >{props.title}</h3>
                    <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <div>
                            <input className={styles.InputStyle}
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

                            <input className={styles.InputStyle}
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
                        </div>
                        <div>
                            <input type="submit" className={styles.ButtonStyle}/>
                        </div>
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


