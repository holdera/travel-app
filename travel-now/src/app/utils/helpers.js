export function formatDateTime(date) {
	const d = date.split('T');
	const theDate = new Date(d.toString());
	const timeOnly = theDate.toLocaleTimeString([], {
		hour: 'numeric',
		minute: 'numeric',
	});
	return timeOnly;
}

export function formatTravelTime(amount) {
	const formattedAmount = amount
		.replace('PT', '')
		.split('H')
		.toString()
		.replace(',', 'H ');
	return formattedAmount;
}

export function getAirline(data, code) {
	return data[code];
}

export function getTodaysDate() {
	const d = new Date();
	return d.toLocaleDateString([], {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
