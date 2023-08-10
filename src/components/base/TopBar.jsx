import React, { useState } from "react"
import {
    createStyles,
    Header,
    Group,
    Container,
    Burger,
    rem,
    Avatar,
    UnstyledButton,
    Text,
    Menu,
} from "@mantine/core"
import {
    IconLogout,
    IconHeart,
    IconSettings,
    IconChevronDown,
} from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks"
import { DarkModeButton } from "../DarkModeButton"

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        borderBottom: `${rem(1)} solid ${
            theme.fn.variant({ variant: "filled", color: theme.primaryColor })
                .background
        }`,
        marginBottom: rem(120),
    },
    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: rem(56),

        [theme.fn.smallerThan("sm")]: {
            justifyContent: "flex-start",
        },
    },

    links: {
        width: rem(260),

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    social: {
        width: rem(260),

        [theme.fn.smallerThan("sm")]: {
            width: "auto",
            marginLeft: "auto",
        },
    },

    burger: {
        marginRight: theme.spacing.md,

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },
    user: {
        color: theme.white,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        transition: "background-color 100ms ease",

        [theme.fn.smallerThan("xs")]: {
            display: "none",
        },
    },
    link: {
        display: "block",
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: theme.primaryColor,
            }).color,
        },
    },
}))

export const TopBar = () => {
    const links = [
        {
            link: "/home",
            label: "Home",
        },
        {
            link: "/players",
            label: "Players",
        },
        {
            link: "/teams",
            label: "Teams",
        },
    ]

    const [opened, { toggle }] = useDisclosure(false)
    const [active, setActive] = useState(links[0].link)
    const [userMenuOpened, setUserMenuOpened] = useState(false)
    const { classes, theme, cx } = useStyles()

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={cx(classes.link, {
                [classes.linkActive]: active === link.link,
            })}
            onClick={(event) => {
                event.preventDefault()
                setActive(link.link)
            }}
        >
            {link.label}
        </a>
    ))
    const user = {
        name: "Jane Spoonfighter",
        email: "janspoon@fighter.dev",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
    }
    return (
        <Header height={56} mb={120}>
            <Container className={classes.inner}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    size="sm"
                    className={classes.burger}
                />
                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>
                <Group spacing={1}>
                    <Group className={classes.social} spacing={0}>
                        <Menu
                            width={260}
                            position="bottom-end"
                            transitionProps={{ transition: "pop-top-right" }}
                            onClose={() => setUserMenuOpened(false)}
                            onOpen={() => setUserMenuOpened(true)}
                            withinPortal
                        >
                            <Menu.Target>
                                <UnstyledButton
                                    className={cx(classes.user, {
                                        [classes.userActive]: userMenuOpened,
                                    })}
                                >
                                    <Group spacing={7}>
                                        <Avatar
                                            src={user.image}
                                            alt={user.name}
                                            radius="xl"
                                            size={20}
                                        />
                                        <Text
                                            weight={500}
                                            size="sm"
                                            sx={{
                                                lineHeight: 1,
                                                color: theme.white,
                                            }}
                                            mr={3}
                                        >
                                            {user.name}
                                        </Text>
                                        <IconChevronDown
                                            size={rem(12)}
                                            stroke={1.5}
                                        />
                                    </Group>
                                </UnstyledButton>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item
                                    icon={
                                        <IconHeart
                                            size="0.9rem"
                                            stroke={1.5}
                                            color={theme.colors.red[6]}
                                        />
                                    }
                                >
                                    Liked players
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Label>Settings</Menu.Label>
                                <Menu.Item
                                    icon={
                                        <IconSettings
                                            size="0.9rem"
                                            stroke={1.5}
                                        />
                                    }
                                >
                                    Account settings
                                </Menu.Item>
                                <Menu.Item
                                    icon={
                                        <IconLogout
                                            size="0.9rem"
                                            stroke={1.5}
                                        />
                                    }
                                >
                                    Logout
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                    <Group className={classes.actions} spacing={5}>
                        <DarkModeButton />
                    </Group>
                </Group>
            </Container>
        </Header>
    )
}
