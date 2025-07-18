import { server_domain as SERVER_DOMAIN } from '../apiRoute'

export const login = async (data, api_key = null) => {
	const url = `${SERVER_DOMAIN}/login`;
	const structure = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}

	return await fetch(url, structure)
		.then(async (response) => {
			if (!response.ok) {
				return response.json().then(errorData => {
					throw errorData.errors.msg;
				});
			}
			return response.json()
		})
		.then(data => {
			return data
		})
		.catch((err) => {
			if (typeof (err) == "object") {
				throw 'ERR_CONNECTION_REFUSED'
			}
			throw err
		})

}