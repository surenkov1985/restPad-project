import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEditProductMutation } from "../../../stores/apiReducer";
import { InputBlock } from "../../InputElem/InputElem";
import { ButtonElem, ErrorElem, FormContainer, FormHead, FormTitle, InputContainer, LabelElem, SelectElem, SubmitElem } from "../AddProduct/style";

export const EditProductPage = () => {
	const location = useLocation();
	const props = location.state.props;
	const { handleSubmit, register } = useForm({ mode: "all" });
	const [userData, setUserData] = useState(null);
	const navigate = useNavigate();
	const [error, setError] = useState("");

	const { categories } = useSelector((state) => state.data);

	const [category, setCategory] = useState(props.category);

	const [editProduct] = useEditProductMutation();

	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("restPadUser")));
	}, []);

	const submitHandler = (data) => {
		const fetchData = { ...props, ...data };
		console.log(data, props, fetchData);
		editProduct(fetchData)
			.unwrap()
			.then((data) => navigate("../products"))
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
					<FormTitle>{props.title}</FormTitle>
					<div>
						<SubmitElem type="submit" value="Сохранить" />
						<ButtonElem onClick={closeHandle}>Закрыть</ButtonElem>
					</div>
				</FormHead>
				<InputContainer>
					<LabelElem>
						<span>Категория</span>
						<SelectElem
							defaultValue={props.category}
							{...register("category", {
								defaultValue: props.category,
								value: category,
								onChange: (e) => {
									setCategory(e.target.value);
								},
							})}
						>
							{categories.map((cat, index) => {
								return (
									<option key={index} value={cat.val}>
										{cat.val}
									</option>
								);
							})}
						</SelectElem>
					</LabelElem>

					<InputBlock required={true} text="Название" formRegister={register} name="title" val={props.title} />
					<InputBlock required={false} text="Артикул" formRegister={register} name="article" val={props.article} />
					<InputBlock required={true} text="Цена" formRegister={register} name="price" val={props.price} />
					<InputBlock required={true} text="Количество" formRegister={register} name="amount" val={props.amount} />

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

					<InputBlock required={false} text="Описание" formRegister={register} name="description" val={props.description} />
				</InputContainer>
			</FormContainer>
		</>
	);
};
