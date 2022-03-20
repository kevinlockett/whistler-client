import React from "react"
import { Route } from "react-router-dom"
import Home from './landingPage/LandingPage'
import StudentSignUp from './student/StudentSignup'
import StudentLevel from './student/StudentLevel'
import InstructorSignUp from "./instructor/InstructorSignup"
import InstructorLevel from "./instructor/InstructorLevel"
import InstructorList from "./instructor/InstructorList"

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
				<Route exact path="/studentlevel">
					<StudentLevel />
				</Route>
				<Route exact path="/apply">
					<InstructorSignUp />
				</Route>
				<Route exact path="/instructorlevel">
					<InstructorLevel />
				</Route>
				<Route exact path="/instructors">
					<InstructorList />
				</Route>
			</main>
		</>
	)
}
