import styled from "styled-components";

export const HeaderBlock = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
	background: #ffffff;
	box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 30px;
`;

export const AuthLinks = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;
`;

export const MainContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	flex-direction: column;
	align-items: normal;
`;

export const MainBlock = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-grow: 1;
	padding: 20px;
`;
