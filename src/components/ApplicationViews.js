import React from "react"
import { Route } from "react-router-dom"
import Home from './landingPage/LandingPage'
import StudentSignUp from './student/StudentSignup'
import InstructorSignUp from "./instructor/InstructorSignup"

export const ApplicationViews = () => {
	return (
		<>
			<main id="container--ApplicationViews">
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/signup">
					<StudentSignUp />
				</Route>
				<Route exact path="/apply">
					<InstructorSignUp />
				</Route>
			</main>
		</>
	)
}
