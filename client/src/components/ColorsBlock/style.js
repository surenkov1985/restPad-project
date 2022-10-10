import styled from "styled-components";

export const LabelElem = styled.label`
	display: flex;
	justify-content: space-between;
`;

export const RadioCont = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

export const ColorElem = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 18px;
	height: 18px;
	cursor: pointer;
`;

export const RadioInput = styled.input`
	position: absolute;
	opacity: 0;

	&:checked ~ div {
		border: 2px solid #585858;
	}
`;

export const RadioButton = styled.div`
	border-radius: 50%;
	width: 100%;
	height: 100%;
	z-index: 10;
	cursor: pointer;
`;
