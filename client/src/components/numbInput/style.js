import styled from "styled-components";

export const NumbLabel = styled.label`
	display: flex;
	align-items: center;
	max-width: 40px;
	position: relative;
`;

export const NumbInput = styled.input`
	width: 40px;
	padding: 5px;
	border: 1px solid #b4b4b4;
	border-radius: 5px;
	text-align: center;
`;

export const IncButton = styled.button`
	position: absolute;
	left: 101%;
	font-size: 30px;
	color: green;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-bottom: 4px;
`;

export const DecButton = styled.button`
	position: absolute;
	right: 101%;
	font-size: 30px;
	color: green;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	margin-bottom: 4px;
`;
