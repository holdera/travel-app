export async function fetchSearchData(endpoint, options) {
	const response = await fetch(endpoint, options && options);
	const resData = await response.json();

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	return resData;
}
