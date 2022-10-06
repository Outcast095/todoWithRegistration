import React from 'react';
import styles from "../Authorization.module.css";
import {useForm} from "react-hook-form";

function ExtraUserData(props) {

    const { register, handleSubmit, reset} = useForm({ mode: "onBlur"})

    const onSubmitHandler = (data) => {
        props.enterTextHandler(data)
        reset()
    }

    return (
        <div className={props.value ? styles.ExtraBlock + " " + styles.ExtraBlockActive :styles.ExtraBlock}>
            <div>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input className={styles.InputStyle}
                       {...register("userName",
                           {
                               required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                               minLength: {
                                   value: 5,
                                   message: "слишком короткая строка"
                               },
                           }
                       )}
                       placeholder={"Введите свое имя"}
                />

                <input className={styles.InputStyle}
                       {...register("userSureName", {
                           required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                           minLength: {
                               value: 2,
                               message: "слишком короткая строка"
                           },
                       })
                       }
                       placeholder={"Введите свою фамилию"}
                />

                <input type="tel" className={styles.InputStyle}
                       {...register("userPhoneNumber", {
                           required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                           minLength: {
                               value: 2,
                               message: "слишком короткая строка"
                           },
                       })
                       }
                       placeholder={"Введите номер телефона"}
                />

                <input type="tel" className={styles.InputStyle}
                       {...register("userEmail", {
                           required: "поле объязательно для заполнения",                           /// вместо труе мы можем записать текст
                           minLength: {
                               value: 2,
                               message: "слишком короткая строка"
                           },
                       })
                       }
                       placeholder={"Введите эмаил"}
                />
            </form>

            </div>
        </div>
    );
}

export default ExtraUserData;