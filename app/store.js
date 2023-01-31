import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlice'

export default configureStore({
	// Global store
	reducer: {
		cart: cartReducer,
	},
})
