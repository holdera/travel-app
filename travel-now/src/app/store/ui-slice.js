import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: { showLogin: false, notification: null },
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
	},
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

export default uiSlice;
