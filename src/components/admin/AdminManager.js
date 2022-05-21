export const getStaff = () => {
	return fetch(`http://localhost:8000/appusers?role=3`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}