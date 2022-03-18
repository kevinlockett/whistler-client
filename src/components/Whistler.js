import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { Nav } from "./nav/Nav"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Whistler.css"

export const Whistler = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("whistler_token")) {
                return <>
                    <Route>
                        <Nav />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)