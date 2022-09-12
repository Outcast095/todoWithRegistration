import { useForm } from "react-hook-form";



const {
    register,
    formState: {
        errors
    },
    handleSubmit,
    reset
} = useForm({
    mode: "onBlur"
})

const onSubmitHandler = (data) => {
    console.log(data)
    reset()
}