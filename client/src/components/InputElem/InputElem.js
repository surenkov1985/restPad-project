import React, { useState } from "react";
import { InputElem, LabelElem } from "./style";

export const InputBlock = (props) => {
	const { text, formRegister, val, name, required, type } = props;
	const [value, setValue] = useState(val);

	return (
		<LabelElem>
			<p>
				{text}
				{required && <span style={{ color: "#FF0000" }}>*</span>}
			</p>

			<InputElem
				type={type || "text"}
				{...formRegister(name, {
					value: value,
					onChange: (e) => {
						setValue(e.target.value);
					},
				})}
			/>
		</LabelElem>
	);
};
