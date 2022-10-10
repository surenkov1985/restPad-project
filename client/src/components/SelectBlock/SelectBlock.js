import React, { useState } from "react";
import { LabelElem, SelectElem } from "./style";

export const SelectBlock = (props) => {

    const {title, defaultVal, regHandler,  options, name} = props
    const [value, setValue] = useState(defaultVal)

    return (
		<LabelElem>
			<span>{title}</span>
			<SelectElem
				defaultValue={props.category}
				{...regHandler(name, {
					defaultValue: defaultVal,
					value: value,
					onChange: (e) => {
						setValue(e.target.value);
					},
				})}
			>
				{options.map((opt, index) => {
					return (
						<option key={index} value={opt.val}>
							{opt.val}
						</option>
					);
				})}
			</SelectElem>
		</LabelElem>
	);
}