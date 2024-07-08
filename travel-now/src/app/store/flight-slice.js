import { createSlice } from '@reduxjs/toolkit';

const flightSlice = createSlice({
	name: 'flight',
	initialState: { searchData: null, flights: null },
	reducers: {
		getSearchInput(state, action) {
			state.searchData = action.payload;
		},
		getFlights(state, action) {
			state.flights = action.payload;
		},
	},
});

export const flightActions = flightSlice.actions;
export const flightReducer = flightSlice.reducer;

export default flightSlice;
