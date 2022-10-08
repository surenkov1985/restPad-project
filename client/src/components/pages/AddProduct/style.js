import styled from "styled-components";

export const FormContainer = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const FormHead = styled.div`
	display: flex;
	align-items: center;
	column-gap: 50px;
	padding: 10px 20px;
`;

export const FormTitle = styled.h2`
	font-size: 22px;
	font-weight: 700;
`;

export const InputContainer = styled.div`
	max-width: 600px;
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	padding: 10px 20px;
`;

export const LabelElem = styled.label`
	display: flex;
	justify-content: space-between;
`;

export const InputElem = styled.input`
	border: 1px solid #010101;
	padding: 5px;
	border-radius: 5px;
`;

export const SelectElem = styled.select`
	border: 1px solid #010101;
	border-radius: 5px;
	padding: 5px;
`;

export const SubmitElem = styled.input`
	border-radius: 5px;
	padding: 10px 20px;
	min-width: 100px;
	background: #6ed06e;
	color: #ffffff;
	cursor: pointer;
	transition: all 0.1s;

	&:hover {
		background: #62b662;
	}
`;

export const ButtonElem = styled.button`
	border-radius: 5px;
	padding: 10px 20px;
	min-width: 100px;
	background: #bdc2bd;
	color: #000000;
	cursor: pointer;
	transition: all 0.1s;
	margin-left: 10px;

	&:hover {
		background: #717371;
		color: #ffffff;
	}
`;

export const ErrorElem = styled.div`
	position: absolute;
	right: 50px;
	z-index: 10;
	padding: 20px;
	color: #ff0000;
	border-radius: 5px;
	background: rgba(255, 0, 0, 0.2);
`;
