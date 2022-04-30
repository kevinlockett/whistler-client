export const getAppUsers = () => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/appusers`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const getAppUser = (userId) => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/appusers/${userId}`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}

export const updateAppUser = (user) => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/appusers/${user.id}`, {
		method: "PUT",
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
}

export const deleteAppUser = (userId) => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/appusers/${userId}`, {
		method: "DELETE",
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	})
}
