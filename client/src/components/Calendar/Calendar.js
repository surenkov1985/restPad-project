import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DaysBlock, WeekDays } from "./WeekDays";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const CalendarBlock = styled.div`
	display: flex;
	position: absolute;
	top: 35px;
	left: 5px;
	flex-direction: column;
	background: #7f7f7f;
	border-radius: 5px;
	z-index: 10;
`;

const CalendarHead = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
`;

const DateControl = styled.button`
	background: none;
	color: #ffffff;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		opacity: 0.5;
	}
`;

const WeekDay = styled.li`
	font-weight: 600;
	font-size: 10px;
	padding: 4px;
	color: #71717a;
	text-align: center;
`;

export const DateEl = styled(WeekDay)`
	color: #ffffff;
	height: 30px;
	font-weight: 600;
	font-size: 11px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: 50%;

	&.today {
		background: #3b82f6;
		color: #ffffff !important;
		&:hover {
			background: #3b82f6;
			color: #ffffff !important;
		}
	}
	&.yearPage {
		color: #000000;
	}

	&.previous {
		color: #b5b5b5;
	}
	&.next {
		color: #b5b5b5;
	}

	&:hover {
		background: #99999f;
		color: #ffffff;
	}

	&.active {
		background: #99999f;
		color: #ffffff;
	}

	&.monthPageDay {
		height: 100%;
		border-radius: 0;
		align-items: flex-start;
		color: #000000;
		font-size: 14px;
		font-weight: 500;
		&.previous {
			color: #71717a;
		}
		&.next {
			color: #71717a;
		}
		&:not(:nth-child(7n + 7)) {
			border-right: 1px solid #e0e0e0;
			border-top: 1px solid #e0e0e0;
		}
		&:nth-child(7n + 7) {
			border-top: 1px solid #e0e0e0;
		}
		&:hover {
			background: #eff6ff;
		}
		&.today {
			background: #aed2ff;
			color: #000000;
			&:hover {
				background: #aed2ff;
				color: #000000;
			}
		}
	}
`;

const DayText = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	&.monthPageDay {
		justify-content: space-between;
	}

	& > .month {
		color: #71717a;
	}
`;

export const Calendar = () => {
	// class Dates {
	// 	months;
	// 	date;

	// 	constructor(date) {
	// 		this.months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
	// 		this.date = date;
	// 	}

	// 	get today() {
	// 		return this.date.getDate()
	// 	}

	//     get fullYear() {

	//     }
	// }

	const getDates = () => {
		let date = new Date();
		const today = date.getDate();
		const todayString = date.toLocaleString();
	};
	const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
	const calendarDays = [];
	let date = new Date();
	const today = date.getDate();
	const [todayMonth, setTodayMonth] = useState(date.getMonth());
	const [fullYear, setFullYear] = useState(date.getFullYear());
	const [fullMonth, setFullMonth] = useState(months[todayMonth]);
	const lastDate = new Date(fullYear, todayMonth + 1, 0).getDate();
	const firstWeekDay = new Date(fullYear, todayMonth, 1).getDay();
	const lastWeekDay = new Date(fullYear, todayMonth + 1, 0).getDay();

	const [startDate, setStartDate] = useState("");
	const [endDate, setSEndDate] = useState("");

	const [firstOrderDate, setFirstOrderDate] = useState(null);
	const user_id = JSON.parse(localStorage.getItem("restPadUser")).id;

	console.log(lastDate);

	for (let i = 1; i <= lastDate; i++) {
		let resDate = new Date(fullYear, todayMonth, i);
		calendarDays.push({
			day: i,
			monthNum: todayMonth,
			year: fullYear,
			month: ["current", resDate.toLocaleDateString() === date.toLocaleDateString() ? "today" : ""],
			id: "c" + i,
		});
	}

	if (firstWeekDay !== 1) {
		for (let i = 0; i < firstWeekDay - 1; i++) {
			calendarDays.unshift({
				day: new Date(fullYear, todayMonth, -i).getDate(),
				monthNum: todayMonth - 1,
				year: fullYear,
				month: ["previous"],
				id: "pr" + i,
			});
		}
	}

	for (let i = 1; calendarDays.length < 42; i++) {
		calendarDays.push({ day: i, monthNum: todayMonth + 1, year: fullYear, month: ["next"], id: "n" + i });
	}

	const setDatesPeriod = (e, obj) => {
		let date = new Date(fullYear, todayMonth, obj.day);
		obj.month.push("active");
		calendarDays.map((res) => {
			if (res.id === obj.id) {
				return obj;
			}
			return res;
		});
		e.currentTarget.classList.add("active");
		if (!startDate) {
			setStartDate(date.toLocaleString().replace(",", " "));
		} else {
			setSEndDate(date.toLocaleString().replace(",", " "));
		}
	};

	useEffect(() => {
		fetch(`http://localhost:5000/getFirstOrder?user_id=${user_id}`)
			.then((result) => {
				return result.json();
			})
			.then((data) => {
				console.log(data);
				setFirstOrderDate(data.date);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		if (fullMonth && fullYear) {
			let newDate = new Date(fullYear, todayMonth, 1);
			setFullMonth(months[newDate.getMonth()]);
			setFullYear(newDate.getFullYear());
			setTodayMonth(newDate.getMonth());
		}
	}, [todayMonth]);

	return (
		<CalendarBlock>
			<CalendarHead>
				<div>
					<CalendarHead>
						<DateControl
							onClick={() => {
								setTodayMonth(todayMonth - 1);
							}}
						>
							<MdOutlineArrowBackIos />
						</DateControl>
						<div>
							<DateControl>{fullMonth}</DateControl>
							<DateControl style={{ marginLeft: "5px" }}>{fullYear}</DateControl>
						</div>

						<DateControl
							onClick={() => {
								setTodayMonth(todayMonth + 1);
							}}
						>
							<MdOutlineArrowForwardIos />
						</DateControl>
					</CalendarHead>
					<WeekDays />
					<DaysBlock>
						{calendarDays.map((res) => {
							return (
								<DateEl
									key={res.id + res.month}
									className={res.month.join(" ") + " " + ""}
									onClick={(e) => {
										console.log(res.year + "-" + res.monthNum + "-" + res.day);
										setDatesPeriod(e, res);
									}}
								>
									<DayText>{res.day}</DayText>
								</DateEl>
							);
						})}
					</DaysBlock>
				</div>
				<div></div>
			</CalendarHead>

			<CalendarHead style={{ columnGap: "10px", padding: "10px 20px" }}>
				<input type="text" value={startDate} />
				<input type="text" value={endDate} />
			</CalendarHead>
			<CalendarHead style={{ padding: "10px 30px" }}>
				<DateControl>Выбрать</DateControl>
				<DateControl>Сегодня</DateControl>
				<DateControl>Сброс</DateControl>
			</CalendarHead>
		</CalendarBlock>
	);
};
