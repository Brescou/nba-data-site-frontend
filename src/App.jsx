import React, { useState, createContext, useEffect } from "react"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"

import { TopBar } from "./components/TopBar"
// import Login from "./pages/Login"

export const AuthContext = createContext()

const App = () => {
    const [authToken, setAuthToken] = useState(
        () => localStorage.getItem("token") || null,
    )
    const [colorScheme, setColorScheme] = useState("light")
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))
    useEffect(() => {
        localStorage.setItem("token", authToken)
    }, [authToken])

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ colorScheme }}
                withGlobalStyles
                withNormalizeCSS
            >
                <AuthContext.Provider value={{ authToken, setAuthToken }}>
                    {/* <Login /> */}
                    <TopBar />
                </AuthContext.Provider>{" "}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
