import React from "react"
import { Route } from "react-router-dom"
import Home from './landingPage/LandingPage'
import StudentSignUp from './student/StudentSignup'
import StudentLevel from './student/StudentLevel'
import StudentMusicStyle from "./student/StudentMusicStyle"
import InstructorSignUp from "./instructor/InstructorSignup"
import InstructorLevel from "./instructor/InstructorLevel"
import InstructorList from "./instructor/InstructorList"
import InstructorDetails from "./instructor/InstructorDetails"
import InstructorMusicStyle from "./instructor/InstructorMusicStyle"
import InstrumentFamily from "./instrument/InstrumentFamily"
import InstrumentForm from "./instrument/InstrumentForm"

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
				<Route exact path="/studentstyle">
					<StudentMusicStyle />
				</Route>
				<Route exact path="/apply">
					<InstructorSignUp />
				</Route>
				<Route exact path="/instructorlevel">
					<InstructorLevel />
				</Route>
				<Route exact path="/instructorstyle">
					<InstructorMusicStyle />
				</Route>				
				<Route exact path="/instructors">
				<InstructorList />
				</Route>
				<Route exact path="/details/:instructorId(\d+)">
				<InstructorDetails />
				</Route>
				<Route exact path="/instrumentfamily">
					<InstrumentFamily />
				</Route>
				<Route exact path="/instrumentform">
					<InstrumentForm />
				</Route>
			</main>
		</>
	)
}
