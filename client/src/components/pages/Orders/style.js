import styled from "styled-components";
import { ProductsCont } from "../Produts/style";

export const OrdersCont = styled(ProductsCont)`
	overflow-y: auto;
	row-gap: 8px;
`;

export const OrderHead = styled.div`
	display: grid;
	grid-template-columns: 5fr 1.5fr 1fr 1.5fr 1fr 10fr 3fr 2fr 0.8fr;
	background: #e0e0e0;
	padding: 7px;
	border-radius: 8px 8px 0 0;
	font-size: 14px;
	position: sticky;
	top: 0;

	& select {
		box-shadow: 0px 4px 8px -3px rgba(34, 60, 80, 0.2);
		border-radius: 3px;
		font-size: 14px;
	}
`;

export const OrderItem = styled.div`
	display: flex;
	flex-direction: column;
`;

export const OrderItemHead = styled(OrderHead)`
	background: #e7707d;
	border-radius: 0 0 0 0;
`;
export const OrderItemDesc = styled(OrderHead)`
	background: #f4959d;
	border-radius: 0 0 0 0;
`;
