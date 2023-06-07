import { useForm } from "@mantine/form"
import React from "react"

export const Register = () => {
    const form = useForm({
        initialValues: {
            email: "",
            password: "",
            username: "",
            fullname: "",
        },
        validate: {
            email: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? null
                    : "Invalid email",
        },
    })

    return (
        <div>
            <h1>Register</h1>
        </div>
    )
}
