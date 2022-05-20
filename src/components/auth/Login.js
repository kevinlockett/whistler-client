import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"

export default function Login() {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

//        return fetch("https://whistler-app-api.heroku.com/login", {
        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: username.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem("whistler_id", res.user_id)
                    localStorage.setItem("whistler_token", res.token)
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login" >
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Username or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <img className="logo__login" src={require('../assets/w_logo2.png')}
                                alt="Mr. Whistler's Musical Emporium Logo" />
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputUsername" style={{color:'black'}}> Username </label>
                        <input ref={username} type="username" id="username" className="form-control" placeholder="Username address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword" style={{color:'black'}}> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
                    </fieldset>
                    
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn" type="submit">Sign In</button>
                    </fieldset>
                    <div className="link--register">
                        <Link to="/register">Not a member yet?</Link>
                    </div>
                </form>    
            </section>
        </main>
    )
}
