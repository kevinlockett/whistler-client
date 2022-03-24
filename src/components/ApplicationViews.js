import React from "react"
import { Route } from "react-router-dom"
import Home from './landingPage/LandingPage'
import StudentSignUp from './student/StudentSignup'
import InstructorSignUp from "./instructor/InstructorSignup"
import StudentLevel from './student/StudentLevel'
import InstructorLevel from './instructor/InstructorLevel'
import InstrumentFamily from "./instrument/InstrumentFamily"
import StudentInstrumentForm from "./student/StudentInstrumentForm"
import InstructorInstrumentForm from "./instructor/InstructorInstrumentForm"
import StudentMusicStyle from './student/StudentMusicStyle'
import InstructorMusicStyle from './instructor/InstructorMusicStyle'
import InstructorList from "./instructor/InstructorList"
import InstructorDetails from "./instructor/InstructorDetails"
import UserProfile from "./user/UserProfile"
import AdminList from "./admin/AdminList"

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
				<Route exact path="/studentlevel">
					<StudentLevel />
				</Route>
				<Route exact path="/instructorlevel">
					<InstructorLevel />
				</Route>
				<Route exact path="/family">
					<InstrumentFamily />
				</Route>
				<Route exact path="/studentinstruments/:familyId(\d+)">
					<StudentInstrumentForm />
				</Route>
				<Route exact path="/instructorinstruments/:familyId(\d+)">
					<InstructorInstrumentForm />
				</Route>
				<Route exact path="/studentstyle">
					<StudentMusicStyle />
				</Route>
				<Route exact path="/instructorstyle">
					<InstructorMusicStyle />
				</Route>
				<Route exact path="/instructors">
					<InstructorList />
				</Route>
				<Route exact path="/instructors/:instrumentId(\d+)">
					<InstructorList />
				</Route>
				<Route exact path="/details/:instructorId(\d+)">
					<InstructorDetails />
				</Route>
				<Route exact path="/profile">
					<UserProfile />
				</Route>
				<Route exact path="/admin">
					<AdminList />
				</Route>
			</main>
		</>
	)
}
