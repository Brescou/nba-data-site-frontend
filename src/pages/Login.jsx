import React from "react"
import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
} from "@mantine/core"

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: rem(900),
        backgroundSize: "cover",
        backgroundImage:
            "url(https://images.unsplash.com/photo-1627627256672-027a4613d028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80)",
    },

    form: {
        borderRight: `${rem(1)} solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.gray[3]
        }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),

        [theme.fn.smallerThan("sm")]: {
            maxWidth: "100%",
        },
    },

    title: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}))

const Login = () => {
    const { classes } = useStyles()
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

                <TextInput
                    label="Email"
                    placeholder="hoops@gmail.com"
                    size="md"
                />
                <PasswordInput label="Password" mt="md" size="md" />
                <Checkbox label="Keep me logged in" mt="xl" size="md" />
                <Button fullWidth mt="xl" size="md">
                    Login
                </Button>

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
