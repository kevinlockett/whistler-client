export const getAppUsers = () => {
	return fetch(`http://localhost:8000/api/appusers`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const getAppUser = (userId) => {
	return fetch(`http://localhost:8000/api/appusers/${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const updateAppUser = (userId) => {
	return fetch(`http://localhost:8000/api/appusers/${userId.id}`, {
		method: "PUT",
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userId),
	})
}

export const deleteAppUser = (userId) => {
	return fetch(`http://localhost:8000/api/appusers/${userId}`, {
		method: "DELETE",
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	})
}
