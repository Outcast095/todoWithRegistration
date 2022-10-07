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
       <div></div>
    );
}

export default ExtraUserData;