export const getStates = () => {
	return fetch(`http://localhost:8000/states`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}