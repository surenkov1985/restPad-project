import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { authToggle } from "../stores/dataReducer";
import { Layout } from "./Layout";
import { AddOrder } from "./pages/AddOrder/AddOrder";
import { AddProductPage } from "./pages/AddProduct/AddProductPage";
import { AdminPage } from "./pages/Admin/Admin";
import { EditProductPage } from "./pages/EditProductPage/EditProductPage";
import { LoginPage } from "./pages/Login/Login";
import { OrderPage } from "./pages/Orders/OrderPage";
import { ProductsPage } from "./pages/Produts/Products";
import { Register } from "./pages/Register/Register";

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
					<Route path="addOrder" element={<AddOrder/>}/>
					<Route path="editProduct" element={<EditProductPage/>}/>
					<Route path="orders" element={<OrderPage/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
