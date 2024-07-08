import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: { showLogin: false, notification: null, isFetching: false },
	reducers: {
		toggle(state) {
			state.showLogin = !state.showLogin;
		},
		pushNotifications(state, action) {
			state.notification = {
				status: action.payload.status,
				message: action.payload.message,
			};
		},
		checkIfDataIsFetching(state) {
			state.isFetching = !state.isFetching;
		},
	},
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

export default uiSlice;
