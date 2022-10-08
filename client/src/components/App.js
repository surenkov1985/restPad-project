import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { authToggle } from "../stores/dataReducer";
import { Layout } from "./Layout";
import { AddProductPage } from "./pages/AddProduct/AddProductPage";
import { AdminPage } from "./pages/Admin";
import { LoginPage } from "./pages/Login";
import { ProductsPage } from "./pages/Produts";
import { Register } from "./pages/Register";

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.hasOwnProperty("restPadUser")) {
			dispatch(authToggle(true));
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="register" element={<Register />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="admin" element={<AdminPage />} />
					<Route path="products" element={<ProductsPage />} />
					<Route path="addProduct" element={<AddProductPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
