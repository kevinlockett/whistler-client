export const getInstructors = () => {
	return fetch(`http://localhost:8000/api/appusers?role=2`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}
