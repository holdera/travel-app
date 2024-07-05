import { flightActions } from './flight-slice';
import { uiActions } from './ui-slice';

const coords = {
	lat: 43.86247,
	lng: -79.02894,
};
const mainUrl = `https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?lat=${coords.lat}&lng=${coords.lng}&locale=en-US`;

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6e9beb027dmsh7ff618a0bf8182ap19c29ejsnd192af037ccb',
		'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
	},
};

export const fetchFlights = () => {
	return async (dispatch) => {
		dispatch(
			uiActions.pushNotifications({
				status: 'pending',
				message: 'Flights are coming up!',
			})
		);

		const fetchData = async () => {
			const response = await fetch(mainUrl, options);
			if (!response.ok) {
				throw new Error('Failed to get Data');
			}

			const result = await response.json();
			return result;
		};

		try {
			const flightData = await fetchData();
			console.log(flightData);
			dispatch(flightActions.getFlights(flightData));
		} catch (error) {
			dispatch(
				uiActions.pushNotifications({
					status: 'error',
					message: 'Cannot login. Please try again later.',
				})
			);
		}
	};
};
