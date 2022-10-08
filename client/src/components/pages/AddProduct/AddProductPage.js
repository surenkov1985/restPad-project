import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../../stores/apiReducer";
import { ButtonElem, ErrorElem, FormContainer, FormHead, FormTitle, InputContainer, InputElem, LabelElem, SelectElem, SubmitElem } from "./style";

export const AddProductPage = () => {
	const { handleSubmit, register } = useForm({ mode: "all" });
	const [userData, setUserData] = useState(null);
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const [addProduct] = useAddProductMutation();

	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("restPadUser")));
	}, []);

	const submitHandler = (data) => {
		const fetchData = { ...data, userId: userData.id };
		console.log(fetchData);

		addProduct(fetchData)
			.unwrap()
			.then((resData) => {
				navigate("../products");
			})
			.catch((err) => {
				setError(err.data.message);
				setTimeout(() => {
					setError("");
				}, 1500);
			});
	};

	const closeHandle = (e) => {
		e.preventDefault();

		navigate("../products");
	};

	return (
		<>
			{error && <ErrorElem>{error}</ErrorElem>}
			<FormContainer onSubmit={handleSubmit(submitHandler)}>
				<FormHead>
					<FormTitle>Новый товар</FormTitle>
					<div>
						<SubmitElem type="submit" value="Сохранить" />
						<ButtonElem onClick={closeHandle}>Закрыть</ButtonElem>
					</div>
				</FormHead>
				<InputContainer>
					<LabelElem>
						<span>Категория</span>
						<SelectElem {...register("category")}>
							<option defaultValue="роллы">Роллы</option>
							<option value="пицца">Пицца</option>
							<option value="напитки">Напитки</option>
							<option value="салаты">Салаты</option>
						</SelectElem>
					</LabelElem>
					<LabelElem>
						<p>
							Название
							<span style={{ color: "#FF0000" }}>*</span>
						</p>

						<InputElem type="text" {...register("title")} />
					</LabelElem>
					<LabelElem>
						<span>Артикул</span>
						<InputElem type="text" {...register("article")} />
					</LabelElem>
					<LabelElem>
						<p>
							Цена
							<span style={{ color: "#FF0000" }}>*</span>
						</p>
						<InputElem type="text" {...register("price")} />
					</LabelElem>
					<LabelElem>
						<p>
							Количество
							<span style={{ color: "#FF0000" }}>*</span>
						</p>
						<InputElem type="text" name="" {...register("amount")} />
					</LabelElem>
					<LabelElem>
						<span>Единица измерения</span>
						<SelectElem {...register("unit")}>
							<option defaultValue="шт">шт.</option>
							<option value="кг">кг.</option>
							<option value="г">г.</option>
							<option value="л">л.</option>
						</SelectElem>
					</LabelElem>
					<LabelElem>
						<span>НДС</span>
						<SelectElem {...register("vat")}>
							<option defaultValue="не облагается">Не облагается</option>
							<option value="0">0%</option>
							<option value="10">10%</option>
							<option value="18">18%</option>
							<option value="20">20%</option>
						</SelectElem>
					</LabelElem>
					<LabelElem {...register("color")}>
						<span>Цвет кнопки</span>
						<div>
							<label>
								<input type="radio" {...register("color")} value="green" />
							</label>
							<label>
								<input type="radio" {...register("color")} value="red" />
							</label>
							<label>
								<input type="radio" {...register("color")} value="yellow" />
							</label>
							<label>
								<input type="radio" {...register("color")} value="blue" />
							</label>
						</div>
					</LabelElem>
					<LabelElem>
						<span>Описание</span>
						<InputElem type="text" {...register("description")} />
					</LabelElem>
				</InputContainer>
			</FormContainer>
		</>
	);
};
