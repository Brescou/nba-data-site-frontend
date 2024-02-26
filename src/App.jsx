import React, { useState, createContext } from "react"
import { MantineProvider, ColorSchemeProvider } from "@mantine/core"
import { Base } from "./components/base/Base"
import { BrowserRouter } from "react-router-dom"

// import Login from "./pages/Login/Login"

export const AuthContext = createContext(null)

const App = () => {
    return (<h1>App</h1>)
}

export default App
