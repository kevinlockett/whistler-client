export const getInstructors = () => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/appusers?role=2`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const getApprovedInstructors = () => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/appusers?approved=1&role=2`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const getApprovedInstructorsByInstrument = (instrumentId) => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/appusers?approved=1&instrument=${instrumentId}&role=2`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}