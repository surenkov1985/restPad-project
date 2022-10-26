import React, { useEffect, useRef, useState } from "react";
import { DecButton, IncButton, NumbInput, NumbLabel } from "./style";

export const NumbInputElem = (props) => {
	const { val, change, incVal, decVal } = props;
	const [value, setValue] = useState(val.numb);
	const inputRef = useRef();

	console.log(111, val.numb);

	useEffect(
		(e) => {
			change(val, value);
		},
		[value]
	);

	useEffect(() => {
		setValue(val.numb);
	}, [val.numb]);

	return (
		<NumbLabel>
			<DecButton
				onClick={(e) => {
					setValue(+value - 1);
					decVal(val);
				}}
			>
				-
			</DecButton>
			<NumbInput
				value={value}
				ref={inputRef}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<IncButton
				onClick={(e) => {
					setValue(+value + 1);
					incVal(val);
				}}
			>
				+
			</IncButton>
		</NumbLabel>
	);
};
