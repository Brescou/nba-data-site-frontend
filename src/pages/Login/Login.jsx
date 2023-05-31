import React, { useContext } from "react"
import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { useApi } from "../../api/useApi"
import { AuthContext } from "../../App"
import useStyles from "./LoginStyles"

const Login = () => {
    const { classes } = useStyles()
    const { callApi, isLoading, error } = useApi()
    const { setToken } = useContext(AuthContext)

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: (value) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                    ? null
                    : "Invalid email",
        },
    })

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title
                    order={2}
                    className={classes.title}
                    ta="center"
                    mt="md"
                    mb={50}
                >
                    Beta Nba Stats
                </Title>
                <form
                    onSubmit={form.onSubmit(async (values) => {
                        console.log(values)
                        const data = await callApi("login", "post", values)
                        if (data.token) {
                            setToken(data.token)
                            if (values.storeToken)
                                localStorage.setItem(
                                    "token",
                                    JSON.stringify(data.token),
                                )
                        }
                    })}
                >
                    <TextInput
                        label="Email"
                        placeholder="hoops@gmail.com"
                        size="md"
                        {...form.getInputProps("email")}
                    />
                    <PasswordInput
                        label="Password"
                        mt="md"
                        size="md"
                        {...form.getInputProps("password")}
                    />
                    <Checkbox
                        label="Keep me logged in"
                        mt="xl"
                        size="md"
                        {...form.getInputProps("storeToken")}
                    />
                    <Button
                        fullWidth
                        mt="xl"
                        size="md"
                        type="submit"
                        loading={isLoading}
                    >
                        Login
                    </Button>
                    {error && (
                        <Text mt="md" color="red" weight={700}>
                            {console.log(error)}
                        </Text>
                    )}
                </form>
                <Text ta="center" mt="md">
                    Don&apos;t have an account?{" "}
                    <Anchor
                        href="#"
                        weight={700}
                        onClick={(event) => event.preventDefault()}
                    >
                        Register
                    </Anchor>
                </Text>
            </Paper>
        </div>
    )
}
export default Login
