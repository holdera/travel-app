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

export function timeToMinutes(time) {
	const [hours, minutes] = time.split(':').map(Number);
	return hours * 60 + minutes;
}

export function minutesToTime(minutes) {
	const hours = Math.floor(minutes / 60);
	const mins = minutes % 60;
	const amOrPm = hours >= 12 ? 'PM' : 'AM';
	const hours12 = hours % 12 || 12;
	return `${String(hours12).padStart(1, '0')}:${String(mins).padStart(
		2,
		'0'
	)} ${amOrPm}`;
}
