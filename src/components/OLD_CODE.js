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

export const Whistler = () => (
    <>
        
        <Route>
            <Nav />
            <ApplicationViews />
        </Route>

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)