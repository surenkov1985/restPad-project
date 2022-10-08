import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiReducer } from "./apiReducer";
import dataReducer from "./dataReducer";

export const store = configureStore({
	reducer: {
		data: dataReducer,
		[apiReducer.reducerPath]: apiReducer.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiReducer.middleware),
});

setupListeners(store.dispatch);
