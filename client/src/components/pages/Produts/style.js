import styled from "styled-components";

export const ProductsCont = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const ProductsContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`;

export const CategoriesBlock = styled.div`
	width: 250px;
`;

export const CategoryList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 2px;
`;

export const CategoryItem = styled.li`
	width: 100%;
	padding: 10px;
	background: #bdc2bd;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}

	&.active {
		background: #ffffff;
	}
`;

export const ProductBlock = styled.div`
	padding: 10px 20px;
`;
