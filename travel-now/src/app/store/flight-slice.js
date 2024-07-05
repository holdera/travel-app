import { createSlice } from '@reduxjs/toolkit';

const flightSlice = createSlice({
	name: 'flight',
	initialState: { flights: [] },
	reducers: {
		getFlights(state, action) {
			state.flights = action.payload.flights;
		},
	},
});

export const flightActions = flightSlice.actions;
export const flightReducer = flightSlice.reducer;

export default flightSlice;
