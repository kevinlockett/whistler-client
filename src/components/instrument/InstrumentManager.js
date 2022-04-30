export const getInstruments = () => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/instruments`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const getInstrumentsByFamily = (family_id) => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/instruments?family_id=${family_id}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const getInstrumentById = (instrument_id) => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/instruments/${instrument_id}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

