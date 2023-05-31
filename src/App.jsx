import React, { useState, createContext } from "react"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"

// import { TopBar } from "./components/TopBar"
import Login from "./pages/Login/Login"

export const AuthContext = createContext(null)

const App = () => {
    const [authToken, setAuthToken] = useState(
        () => localStorage.getItem("token") || null,
    )
    const [colorScheme, setColorScheme] = useState("light")
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

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
                <AuthContext.Provider
                    value={{ token: authToken, setToken: setAuthToken }}
                >
                    <Login />
                    {/* <TopBar /> */}
                </AuthContext.Provider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App
