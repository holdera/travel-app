import { flightActions } from './flight-slice';
import { uiActions } from './ui-slice';
import { ACCESS_TOKEN } from './keys';
import { ENDPOINT } from './endpoints';

const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + ACCESS_TOKEN,
	},
};

export const getSearchValues = (e) => {
	return (dispatch) => {
		const form = new FormData(e.target);
		const formData = Object.fromEntries(form.entries());
		console.log(formData);
		dispatch(flightActions.getSearchInput(formData));
	};
};

export const fetchFlightData = (searchData) => {
	return async (dispatch) => {
		const fetchData = async () => {
			dispatch(uiActions.checkIfDataIsFetching(true));
			const response = await fetch(
				`${ENDPOINT}?originLocationCode=${searchData.from.toUpperCase()}&destinationLocationCode=${searchData.to.toUpperCase()}&departureDate=${
					searchData.depart
				}${
					searchData.return ? `&returnDate=${searchData.return}` : ''
				}&adults=${searchData.travelers}&travelClass=ECONOMY&nonStop=${
					searchData.nonstop === 'on' ? 'true' : 'false'
				}&currencyCode=CAD&max=100`,
				options
			);

			dispatch(uiActions.checkIfDataIsFetching(false));

			if (!response.ok) {
				throw new Error('Failed to get Data');
			}

			const resData = await response.json();
			return resData;
		};
		try {
			const flightData = await fetchData();
			console.log(flightData);
			dispatch(flightActions.getFlights(flightData));
		} catch (error) {
			dispatch(
				uiActions.pushNotifications({
					status: 'error',
					message: 'Cannot fetch data. Please try again later.',
				})
			);
		}
	};
};
