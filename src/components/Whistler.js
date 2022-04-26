import React from "react"
import { Route } from "react-router-dom"
import Nav from "./nav/Nav"
import ApplicationViews from "./ApplicationViews"
import Footer from "./nav/Footer"
import Login from "./auth/Login"
import Register from "./auth/Register"
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy"
import "./Whistler.css"

export default function Whistler() {

    return (
        <>
        
            <Route>
                <Nav />
                <ApplicationViews />
                <Footer />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            <Route path="/privacyPolicy">
                <PrivacyPolicy />
            </Route>

        </>
    )
}
