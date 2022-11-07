import React, { useEffect, useState } from "react";
import { AiOutlineCalendar, AiOutlineClose } from "react-icons/ai";

import { useGetOrdersQuery, useLazyGetOrdersQuery } from "../../../stores/apiReducer";
import { SelectBlock } from "./SelectBlock";
import { dateOptions, payValues, statusValues, workerValues } from "../../../utils/variables";
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
	DatesBlock,
	CalendarIcon,
} from "./style";

export const OrderPage = () => {
	const date = new Date();
	const [data, setData] = useState([]);
	let [getData] = useLazyGetOrdersQuery();

	useEffect(() => {
		getData({ date: date.toISOString().slice(0, 10), endDate: "" })
			.unwrap()
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	}, []);

	const onDateSelect = (value) => {
		let obj = dateOptions.find((item) => item.val === value);
		getData({ date: obj.dates.date, endDate: obj.dates.endDate })
			.unwrap()
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	console.log(data);

	return (
		<OrdersCont>
			<OrderHead>
				<DatesBlock>
					<SelectBlock arr={dateOptions} defaultValue={dateOptions[1].val} onChangeHandler={onDateSelect} />
					<CalendarIcon />
				</DatesBlock>
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
				data.map((order) => {
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
