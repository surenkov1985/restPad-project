import styled from "styled-components";
import { CategoryItem } from "../Produts/style";

export const AddOrderContainer = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 430px 130px auto;
	grid-gap: 5px;
`;

export const OrderBlock = styled.div`
	background-color: #ffffff;
	border-radius: 8px 0 0 8px;
	display: flex;
	flex-direction: column;
`;

export const CategoriesBlock = styled.div`
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 5px;
`;

export const ProductsBlock = styled.div`
	background-color: #ffffff;
	border-radius: 0 8px 8px 0;
	display: grid;
	grid-template-columns: repeat(auto-fill, 120px);
	grid-gap: 5px;
	padding: 5px;
`;

export const CategoryBtn = styled(CategoryItem)`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;

	&.active {
		background: #c4c3c3;
		color: #ffffff;
	}
`;

export const OrderItem = styled.div`
	display: grid;
	grid-template-columns: 4fr 1.5fr 1fr 1fr;
	padding: 10px;
	border-bottom: 1px solid #b4b4b4;
	font-size: 14px;
	font-weight: 600;
`;
