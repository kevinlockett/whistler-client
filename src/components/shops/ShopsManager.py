export const getShops = () => {
	return fetch(`http://localhost:8000/api/shops`, {
		headers: {
			Authorization: `Token ${localStorage.getItem("whistler_token")}`,
		},
	}).then((response) => response.json())
}