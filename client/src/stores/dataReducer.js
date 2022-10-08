import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	initialState: {
		isAuth: false,
		products: [],
		categories: [
			{ val: "Роллы", activeClass: "active" },
			{ val: "Пицца", activeClass: "" },
			{ val: "Салаты", activeClass: "" },
			{ val: "Напитки", activeClass: "" },
		],
		categoryProduct: "Роллы",
	},
	name: "data",
	reducers: {
		authToggle(state, actions) {
			state.isAuth = actions.payload;
		},
		setProducts(state, actions) {
			state.products = actions.payload;
		},
		categoryToggle(state, actions) {
			state.categories = actions.payload;
		},
		setCategory(state, actions) {
			state.categoryProduct = actions.payload;
		},
	},
});

export const { authToggle, setProducts, categoryToggle, setCategory } = dataSlice.actions;
export default dataSlice.reducer;
