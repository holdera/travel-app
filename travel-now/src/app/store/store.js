import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from './ui-slice';
import { flightReducer } from './flight-slice';

export const makeStore = () => {
	return configureStore({
		reducer: { ui: uiReducer, flight: flightReducer },
	});
};
