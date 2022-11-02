import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useGetOrdersQuery, useLazyGetOrdersQuery } from "../../../stores/apiReducer";
import { SelectBlock } from "./SelectBlock";
import {
	DateBlock,
	DeleteButton,
	OrderButton,
	OrderDate,
	OrderHead,
	OrderItem,
	OrderItemDesc,
	OrderItemHead,
	OrdersCont,
	OrderTime,
	OrderDesc,
	ProductsList,
	PayTypeBlock,
} from "./style";

export const OrderPage = () => {
	const date = new Date();
	let dateTime = date.getTime();
	const [today, setToday] = useState(date.toISOString().slice(0, 10));
	const yesterday = new Date(dateTime - 24 * 3600 * 1000);
	const tomorrow = new Date(dateTime + 24 * 3600 * 1000);
	const tomorrowDate = tomorrow.toISOString().slice(0, 10);
	const tomorrowString = tomorrow.toLocaleDateString();
	const yesterdayDate = yesterday.toISOString().slice(0, 10);
	const yesterdayString = yesterday.toLocaleDateString();
	const todayString = date.toLocaleDateString();
	const [data, setData] = useState([]);
	let [getData] = useLazyGetOrdersQuery();

	useEffect(() => {
		getData(date.toISOString().slice(0, 10))
			.unwrap()
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, []);

	const onDateSelect = (value) => {
		getData(value)
			.unwrap()
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const dateOptions = [
		{ text: "Завтра " + tomorrowString, val: tomorrowDate, selected: false },
		{ text: "Сегодня " + todayString, val: today, selected: true },
		{ text: "Вчера " + yesterdayString, val: yesterdayDate, selected: false },
		{ text: "Неделя", val: "", selected: false },
		{ text: "Месяц", val: "", selected: false },
		{ text: "Период", val: "", selected: false },
	];

	const payValues = [
		{
			text: "Оплата",
			val: false,
			selected: true,
		},
		{
			text: "Не оплачен",
			val: false,
			selected: false,
		},
		{
			text: "Оплачен",
			val: false,
			selected: false,
		},
	];

	const workerValues = [
		{
			text: "Все сотрудники",
			val: "all",
			selected: true,
		},
		{
			text: "С сотрудником",
			val: "with",
			selected: false,
		},
		{
			text: "Без сотрудника",
			val: "without",
			selected: false,
		},
	];

	const statusValues = [
		{
			text: "Все статусы",
			val: "all",
			selected: true,
		},
		{
			text: "Новый",
			val: "new",
			selected: true,
		},
		{
			text: "В пути",
			val: "onWay",
			selected: false,
		},
		{
			text: "Выполнен",
			val: "completed",
			selected: false,
		},
	];

	console.log(data);

	return (
		<OrdersCont>
			<OrderHead>
				<div>
					<SelectBlock arr={dateOptions} defaultValue={dateOptions[1].val} onChangeHandler={onDateSelect} />
				</div>
				<PayTypeBlock>Сумма</PayTypeBlock>
				<PayTypeBlock>%</PayTypeBlock>
				<div>
					<SelectBlock arr={payValues} defaultValue={payValues[0].val} />
				</div>
				<div></div>
				<div></div>
				<div>
					<SelectBlock arr={workerValues} defaultValue={workerValues[0].val} />
				</div>
				<div>
					<SelectBlock arr={statusValues} defaultValue={statusValues[0].val} />
				</div>
				<div></div>
			</OrderHead>
			{data &&
				data.map((order, index) => {
					let date = new Date(order.date);
					let time = date.toLocaleTimeString().slice(0, 5);
					let day = date.toLocaleDateString();
					let orderData = JSON.parse(order.order_products);
					let orderDesc =
						order.street +
						(order.house ? " д." + order.house : "") +
						(order.apart ? " кв." + order.apart : "") +
						(order.front_door ? " п." + order.front_door : "") +
						(order.floor ? " эт." + order.floor : "");

					return (
						<OrderItem key={order.id}>
							<OrderItemHead>
								<DateBlock>
									<OrderTime>{time} </OrderTime>
									<OrderDate>{day}</OrderDate>
									<OrderButton>Изменить</OrderButton>
									<OrderButton>Печать</OrderButton>
								</DateBlock>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div>
									<SelectBlock arr={workerValues} defaultValue={workerValues[0].val} />
								</div>
								<div>
									<SelectBlock arr={statusValues} defaultValue={statusValues[0].val} />
								</div>
								<div></div>
							</OrderItemHead>
							<OrderItemDesc>
								<div>
									{orderData.map((item, index) => {
										return (
											<ProductsList key={index}>
												<div>{item.product}</div>
												<div>{item.numb}</div>
												<div>{item.price}</div>
											</ProductsList>
										);
									})}
								</div>
								<PayTypeBlock>{order.order_sum}</PayTypeBlock>
								<PayTypeBlock>{order.discount ? order.discount : ""}</PayTypeBlock>
								<PayTypeBlock>
									<input type="checkbox" />
								</PayTypeBlock>
								<div></div>
								<OrderDesc>
									{orderDesc && (
										<span>
											<strong>адрес: </strong>
											{orderDesc}
										</span>
									)}
									{order.comments && (
										<span>
											<strong>комментарии: </strong> {order.comments}
										</span>
									)}
								</OrderDesc>
								<div></div>
								<div></div>
								<PayTypeBlock>
									<DeleteButton>
										<AiOutlineClose color="red" size={20} />
									</DeleteButton>
								</PayTypeBlock>
							</OrderItemDesc>
						</OrderItem>
					);
				})}
		</OrdersCont>
	);
};
