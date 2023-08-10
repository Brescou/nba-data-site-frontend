import React from "react"
import { TopBar } from "./TopBar"
import { FooterLinks } from "./Footer"
import { Routes, Route } from "react-router-dom"
export const Base = () => {
    const data = [
        {
            title: "About",
            links: [
                {
                    label: "Features",
                    link: "#",
                },
                {
                    label: "Pricing",
                    link: "#",
                },
                {
                    label: "Support",
                    link: "#",
                },
                {
                    label: "Forums",
                    link: "#",
                },
            ],
        },
        {
            title: "Project",
            links: [
                {
                    label: "Contribute",
                    link: "#",
                },
                {
                    label: "Media assets",
                    link: "#",
                },
                {
                    label: "Changelog",
                    link: "#",
                },
                {
                    label: "Releases",
                    link: "#",
                },
            ],
        },
        {
            title: "Community",
            links: [
                {
                    label: "Join Discord",
                    link: "#",
                },
                {
                    label: "Follow on Twitter",
                    link: "#",
                },
                {
                    label: "Email newsletter",
                    link: "#",
                },
                {
                    label: "GitHub discussions",
                    link: "#",
                },
            ],
        },
    ]
    return (
        <>
            <TopBar />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/players" element={<h1>PLAYERS</h1>} />
                <Route path="/teams" element={<h1>Teams</h1>} />
                <Route path="/login" element={<h1>Login</h1>} />
                <Route path="/register" element={<h1>Register</h1>} />
                <Route
                    path="/forgot-password"
                    element={<h1>Forgot Password</h1>}
                />
            </Routes>
            <h1>Base</h1>
            <FooterLinks data={data} />
        </>
    )
}
