import React from "react";
import styled from "styled-components";
import { weekDays } from "../../utils/calendarData";
import { DateEl } from "./Calendar";

export const DaysBlock = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 30px);
`;

export const WeekDays = () => {
	return (
		<DaysBlock>
			{weekDays.map((day) => {
				return <DateEl key={day.weekDay}>{day.weekDay}</DateEl>;
			})}
		</DaysBlock>
	);
};
