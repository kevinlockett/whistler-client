export const getShops = () => {
	return fetch(`https://whistler-app-api.herokuapp.com/api/shops`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}