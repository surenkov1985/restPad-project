import React from "react";
import { ColorElem, RadioButton, RadioInput } from "./style";

export const ColorEl = (props) => {

    const {name, regHandler, val } = props

    return (
		<ColorElem>
			<RadioInput type="radio" {...regHandler(name)} value={val} />
			<RadioButton style={{ background: val }} />
		</ColorElem>
	);
}