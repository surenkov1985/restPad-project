import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLazyGetProductsQuery } from "../../../stores/apiReducer";
import { categoryToggle, setCategory, setProducts } from "../../../stores/dataReducer";
import { AddOrderContainer, CategoriesBlock, CategoryBtn, OrderBlock, OrderItem, ProductsBlock } from "./style";

export const AddOrder = () => {
	const { categories, products, categoryProduct } = useSelector((state) => state.data);
	const dispatch = useDispatch();

	const [getProducts] = useLazyGetProductsQuery();

	useEffect(() => {
		getProducts(categoryProduct)
			.unwrap()
			.then((data) => {
				dispatch(setProducts(data));
			})
			.catch((err) => {
				console.log(err);
			});
	}, [categoryProduct]);

	const categoryHandler = (e) => {
		const newCategories = categories.map((item) => {
			if (e.target.textContent === item.val) {
				dispatch(setCategory(item.val));
				return { ...item, activeClass: "active" };
			} else {
				return { ...item, activeClass: "" };
			}
		});
		dispatch(categoryToggle(newCategories));
	};

	return (
		<AddOrderContainer>
			<OrderBlock>
				<OrderItem>
					<div>Наименование</div>
					<div>Кол.</div>
					<div>Цена</div>
					<div>Стоимость</div>
				</OrderItem>
			</OrderBlock>
			<CategoriesBlock>
				{categories.map((cat) => {
					return (
						<CategoryBtn
							key={cat.val}
							className={cat.activeClass}
							onClick={(e) => {
								categoryHandler(e);
							}}
						>
							{cat.val}
						</CategoryBtn>
					);
				})}
			</CategoriesBlock>
			<ProductsBlock>
				{products.map((res) => {
					return <CategoryBtn>{res.title}</CategoryBtn>;
				})}
			</ProductsBlock>
		</AddOrderContainer>
	);
};
