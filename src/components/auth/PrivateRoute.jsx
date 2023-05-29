import React, { useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

const PrivateRoute = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login", { state: { from: location } })
        }
    }, [location, navigate])

    return <Outlet />
}
