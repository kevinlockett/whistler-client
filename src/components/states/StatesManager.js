export const getStates = () => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/states`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}