export const getInstruments = () => {
	return fetch(`http://localhost:8000/api/instruments`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const getInstrumentsByFamily = (family_id) => {
	return fetch(`http://localhost:8000/api/instruments?family_id=${family_id}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const getInstrumentById = (instrument_id) => {
	return fetch(`http://localhost:8000/api/instruments/${instrument_id}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

