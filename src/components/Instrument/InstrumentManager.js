export const getAppUser = (userId) => {
	return fetch(`http://localhost:8000/api/appusers/${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}