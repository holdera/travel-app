export function getTodaysDate() {
	const d = new Date();
	return d.toLocaleDateString([], {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}
