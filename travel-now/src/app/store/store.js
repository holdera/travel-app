import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from './ui-slice';

export const makeStore = () => {
	return configureStore({
		reducer: { ui: uiReducer },
	});
};
