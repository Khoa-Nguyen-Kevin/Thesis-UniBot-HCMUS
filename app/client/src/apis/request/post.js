export const postRequest = async (domain = '', route = '/', formData = null, token = null, type = null) => {
	const url = `${domain}${route}`;

	const structure = {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(formData)
	}
	const res = await fetch(url, structure)
		.then(async (response) => {
			if (!response.ok) {
				return response.json().then(errorData => {
					console.error(errorData.errors)
					throw errorData.errors;
				});
			}
			return response.json()
		})
		.then(data => {
			return data
		})
		.catch((err) => {
			if (err?.message) throw err?.message
			else throw 'ERR_CONNECTION_REFUSED'
		})

	return res
}