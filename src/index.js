import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import Whistler from "./components/Whistler.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Whistler />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
