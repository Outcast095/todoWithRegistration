import { useForm } from "react-hook-form";



export const {
    register,
    formState: {
        errors
    },
    handleSubmit,
    reset
} = useForm({
    mode: "onBlur"
})

export const onSubmitHandler = (data) => {
    console.log(data)
    reset()
}