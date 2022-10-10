import React from "react";
import { ColorEl } from "./ColorEl";
import {LabelElem, RadioCont, } from "./style";

export const ColorBlock = (props) => {
	const { regHandler, title, name, options } = props;

	return (
		<LabelElem {...regHandler("color")}>
			<span>{title}</span>
			<RadioCont>
				{options.map((res, index) => {
					return <ColorEl key={index} regHandler={regHandler} name={name} val={res.val} />;
				})}
				
			</RadioCont>
		</LabelElem>
	);
};
