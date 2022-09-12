import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import stile from "./Input.module.css"



function Input({placeholder, enterTextHandler, value, handleSubmit, onSubmitHandler, register, inputName}) {



    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <input {...register(inputName,
                {required: "поле объязательно для заполнения",
                    maxLength: {
                        value: 5,
                        message: "слишком короткая строка"
                    }
                },

            )}/>
        </form>

    );
}

export default Input;
