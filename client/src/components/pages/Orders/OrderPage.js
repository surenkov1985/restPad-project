import React from "react";
import { useSelector } from "react-redux";
import { ProductsCont } from "../Produts/style";

export const OrderPage = () => {

    const ordersList = useSelector(state => state.data.orders)

    console.log(ordersList);

	return <ProductsCont>Заказы</ProductsCont>;
};
