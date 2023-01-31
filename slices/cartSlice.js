import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			// Get the item data from the products array
			const item = action.payload
			// Store the array index of the item if it exists in the cart already
			const itemIndex = state.items.findIndex((elm) => elm.id === item.id)

			if (itemIndex === -1) {
				state.items = [...state.items, item]
			} else {
				let existingItem = state.items[itemIndex]
				existingItem.count = existingItem.count + 1
			}
		},
		removeFromCart: (state, action) => {
			// Store the array index of the item if it exists in the cart already
			const index = state.items.findIndex((elm) => elm.id === action.payload.id)

			let currentItems = state.items

			if (index >= 0) {
				let existingItem = currentItems[index]

				if (existingItem.count > 1) {
					existingItem.count = existingItem.count - 1
				} else {
					currentItems.splice(index, 1)
				}

				state.items = currentItems
			} else {
				console.warn(
					`Can't remove product (id: ${action.payload.id}) as its not in the cart.`
				)
			}
		},
		incrementItemInCart: (state, action) => {
			// Store the array index of the item if it exists in the cart already
			const itemIndex = state.items.findIndex(
				(elm) => elm.id === action.payload.id
			)

			if (itemIndex !== -1) {
				let existingItem = state.items[itemIndex]
				existingItem.count = existingItem.count + 1
			}
		},
		decrementItemInCart: (state, action) => {
			// Store the array index of the item if it exists in the cart already
			const itemIndex = state.items.findIndex(
				(elm) => elm.id === action.payload.id
			)

			if (itemIndex !== -1) {
				let existingItem = state.items[itemIndex]
				existingItem.count = existingItem.count - 1
			}
		},
	},
})

export const {
	addToCart,
	removeFromCart,
	incrementItemInCart,
	decrementItemInCart,
} = cartSlice.actions

// Selectors - This is how we pull information from the Globa store slice

// Items in the cart
export const selectItems = (state) => state.cart.items
// Number of items in the cart
export const selectItemsCount = (state) =>
	state.cart.items.reduce((total, item) => (total += item.count), 0)
// Total price of all the items in the cart
export const selectItemsTotal = (state) =>
	state.cart.items.reduce(
		(total, item) => (total += item.price * item.count),
		0
	)
// Estimated price calculated based on the total price
export const selectEstimatedTax = (state) =>
	state.cart.items.reduce(
		(total, item) => (total += item.price * item.count * 0.086),
		0
	)

export default cartSlice.reducer
