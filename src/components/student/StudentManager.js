export const getStudents = () => {
	return fetch(`http://localhost:8000/api/appusers?role=1`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}
