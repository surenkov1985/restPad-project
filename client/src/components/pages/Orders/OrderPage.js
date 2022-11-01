import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useGetOrdersQuery } from "../../../stores/apiReducer";
import { ProductsCont } from "../Produts/style";
import { OrderHead, OrderItem, OrderItemDesc, OrderItemHead, OrdersCont } from "./style";

export const OrderPage = () => {
	const date = new Date();
	const [today, setToday] = useState(date.toISOString().slice(0, 10));
	const todayString = date.toLocaleDateString();
	let { data } = useGetOrdersQuery(date.toISOString().slice(0, 10), { pollingInterval: 5 * 60 * 1000 });

	const dateOptions = [
		{ val: "Завтра", date: "", selected: false },
		{ val: "Сегодня " + todayString, date: today, selected: true },
		{ val: "Вчера", date: "", selected: false },
		{ val: "Неделя", date: "", selected: false },
		{ val: "Месяц", date: "", selected: false },
		{ val: "Период", date: "", selected: false },
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
					<select>
						{dateOptions.map((opt, index) => {
							return (
								<option key={index} value={opt.val} selected={opt.selected}>
									{opt.val}
								</option>
							);
						})}
					</select>
				</div>
				<div>Сумма</div>
				<div>%</div>
				<div>
					<select>
						{payValues.map((opt, index) => {
							return (
								<option key={index} value={opt.val} selected={opt.selected}>
									{opt.text}
								</option>
							);
						})}
					</select>
				</div>
				<div></div>
				<div></div>
				<div>
					<select>
						{workerValues.map((opt, index) => {
							return (
								<option key={index} value={opt.val} selected={opt.selected}>
									{opt.text}
								</option>
							);
						})}
					</select>
				</div>
				<div>
					<select>
						{statusValues.map((opt, index) => {
							return (
								<option key={index} value={opt.val} selected={opt.selected}>
									{opt.text}
								</option>
							);
						})}
					</select>
				</div>
				<div></div>
			</OrderHead>
			{data &&
				data.map((order, index) => {
					return (
						<OrderItem key={order.id}>
							<OrderItemHead>
								<div>{order.date}</div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div>
									<select>
										{workerValues.map((opt, index) => {
											return (
												<option key={index} value={opt.val} selected={opt.selected}>
													{opt.text}
												</option>
											);
										})}
									</select>
								</div>
								<div>
									<select>
										{statusValues.map((opt, index) => {
											return (
												<option key={index} value={opt.val} selected={opt.selected}>
													{opt.text}
												</option>
											);
										})}
									</select>
								</div>
								<div></div>
							</OrderItemHead>
							<OrderItemDesc>
								<div></div>
								<div>{order.order_sum}</div>
								<div>{order.discount ? order.discount : ""}</div>
								<div>
									<input type="checkbox" />
								</div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div>
									<button>
										<AiOutlineClose />
									</button>
								</div>
							</OrderItemDesc>
						</OrderItem>
					);
				})}
		</OrdersCont>
	);
};
