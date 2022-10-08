import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiReducer = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
	endpoints: (build) => ({
		login: build.mutation({
			query: (data) => ({
				url: "/login",
				method: "POST",
				body: data,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		register: build.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				body: data,
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
		addProduct: build.mutation({
			query: (data) => ({
				url: "/addProducts",
				method: "POST",
				body: data,
				headers: {
					"Contennt-Type": "applicetion/json",
				},
			}),
		}),
		getProducts: build.query({
			query: (url) => ({
				url: `/getProducts${url}`,
				method: "GET",
			}),
		}),
		deleteProduct: build.mutation({
			query: (data) => ({
				url: "/deleteProduct",
				body: data,
				method: "DELETE",
				headers: {
					"Content-type": "application/json",
				},
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation, useAddProductMutation, useLazyGetProductsQuery, useDeleteProductMutation } = apiReducer;