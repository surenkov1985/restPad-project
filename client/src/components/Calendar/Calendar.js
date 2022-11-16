import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DaysBlock, WeekDays } from "./WeekDays";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { replaceItem, setCalendar} from "../../stores/calendarReducer";

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

export const Calendar = (props) => {
	const { datesSelect } = props;
	const { calendarDays, months } = useSelector((state) => state.calendar);
	const dispatch = useDispatch();

	let date = new Date();
	const [todayMonth, setTodayMonth] = useState(date.getMonth());
	const [fullYear, setFullYear] = useState(date.getFullYear());
	const [fullMonth, setFullMonth] = useState(months[todayMonth]);
	const lastDate = new Date(fullYear, todayMonth + 1, 0).getDate();
	const firstWeekDay = new Date(fullYear, todayMonth, 1).getDay();

	const [startDate, setStartDate] = useState("");
	const [endDate, setSEndDate] = useState("");

	const [firstOrderDate, setFirstOrderDate] = useState(null);
	const user_id = JSON.parse(localStorage.getItem("restPadUser")).id;

	function setCalendarDays() {
		const days = [];

		for (let i = 1; i <= lastDate; i++) {
			let resDate = new Date(fullYear, todayMonth, i);
			days.push({
				day: i,
				monthNum: todayMonth,
				year: fullYear,
				activeClass: "",
				month: ["current", resDate.toLocaleDateString() === date.toLocaleDateString() ? "today" : ""],
				id: "c" + i,
			});
		}

		if (firstWeekDay !== 1) {
			for (let i = 0; i < firstWeekDay - 1; i++) {
				days.unshift({
					day: new Date(fullYear, todayMonth, -i).getDate(),
					monthNum: todayMonth - 1,
					year: fullYear,
					activeClass: "",
					month: ["previous"],
					id: "pr" + i,
				});
			}
		}

		for (let i = 1; days.length < 42; i++) {
			days.push({ day: i, monthNum: todayMonth + 1, year: fullYear, activeClass: "", month: ["next"], id: "n" + i });
		}

		return days;
	}

	const setDatesPeriod = (e, obj) => {
		let date = new Date(fullYear, todayMonth, obj.day);
		console.log(obj);
		obj = { ...obj, activeClass: "active" };
		dispatch(replaceItem(obj));

		if (!startDate) {
			setStartDate(date);
		} else if (!endDate) {
			setSEndDate(date);
		}
	};

	const resetDatesPeriod = () => {
		setStartDate("");
		setSEndDate("");
		dispatch(
			setCalendar(
				calendarDays.map((item) => {
					return { ...item, activeClass: "" };
				})
			)
		);
	};

	useEffect(() => {
		dispatch(setCalendar(setCalendarDays()));
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
		dispatch(setCalendar(setCalendarDays()));
	}, [todayMonth]);

	console.log(calendarDays);

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
						{calendarDays &&
							calendarDays.map((res) => {
								return (
									<DateEl
										key={res.id + res.month}
										className={res.month.join(" ") + " " + res.activeClass}
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
				<input type="text" value={startDate.toLocaleString().replace(",", "")} onChange={() => {}} />
				<input type="text" value={endDate.toLocaleString().replace(",", "")} onChange={() => {}} />
			</CalendarHead>
			<CalendarHead style={{ padding: "10px 30px" }}>
				<DateControl
					onClick={() => {
						datesSelect({ date: startDate, endDate: endDate });
						resetDatesPeriod();
					}}
				>
					Выбрать
				</DateControl>
				<DateControl>Сегодня</DateControl>
				<DateControl
					onClick={() => {
						resetDatesPeriod();
					}}
				>
					Сброс
				</DateControl>
			</CalendarHead>
		</CalendarBlock>
	);
};
