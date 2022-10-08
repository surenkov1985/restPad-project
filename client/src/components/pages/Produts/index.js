import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLazyGetProductsQuery } from "../../../stores/apiReducer";
import { categoryToggle, setCategory, setProducts } from "../../../stores/dataReducer";
import { ButtonElem, FormHead, FormTitle } from "../AddProduct/style";
import { CategoriesBlock, CategoryItem, CategoryList, ProductBlock, ProductsCont, ProductsContent } from "./style";

export const ProductsPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let { products, categories, categoryProduct } = useSelector((state) => state.data);
	const [getProducts] = useLazyGetProductsQuery();

	useEffect(() => {
		getProducts(categoryProduct)
			.unwrap()
			.then((data) => {
				console.log(data);
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
		<ProductsCont>
			<FormHead>
				<FormTitle>Товары</FormTitle>
			</FormHead>
			<ProductsContent>
				<CategoriesBlock>
					<CategoryList>
						{categories.map((res) => {
							return (
								<CategoryItem key={res.val} onClick={categoryHandler} className={res.activeClass}>
									{res.val}
								</CategoryItem>
							);
						})}
					</CategoryList>
				</CategoriesBlock>
				<div>
					<FormHead>
						<FormTitle>Роллы</FormTitle>

						<ButtonElem
							onClick={(e) => {
								navigate("../addProduct", { replace: true });
							}}
						>
							Новый товар
						</ButtonElem>
					</FormHead>
					<ProductBlock>
						<ul>
							{products.map((res) => {
								return <li key={res.id}>{res.title}</li>;
							})}
						</ul>
					</ProductBlock>
				</div>
			</ProductsContent>
		</ProductsCont>
	);
};
