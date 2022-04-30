export const getStaff = () => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/appusers?role=3`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}