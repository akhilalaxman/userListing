import { configureStore } from '@reduxjs/toolkit';
import userDetails from './containers/usersListing/store/UserDetailsSlice';
export const store = configureStore({
	reducer: {
		userDetails: userDetails,
	},
});
