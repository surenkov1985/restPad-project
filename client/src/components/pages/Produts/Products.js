import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDeleteProductMutation, useLazyGetProductsQuery } from "../../../stores/apiReducer";
import { categoryToggle, setCategory, setProducts } from "../../../stores/dataReducer";
import { ButtonElem, FormHead, FormTitle } from "../AddProduct/style";
import {
	CategoriesBlock,
	CategoryItem,
	CategoryList,
	ColorCell,
	DeletedButton,
	EditLink,
	ItemCell,
	ListHead,
	ProductBlock,
	ProductHead,
	ProductItem,
	ProductList,
	ProductsCont,
	ProductsContent,
} from "./style";
import { AiOutlineClose } from "react-icons/ai";

export const ProductsPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let { products, categories, categoryProduct } = useSelector((state) => state.data);
	const [getProducts] = useLazyGetProductsQuery();
	const [deleteProduct] = useDeleteProductMutation();
	const userId = JSON.parse(localStorage.getItem("restPadUser")).id;

	useEffect(() => {
		const url = new URLSearchParams({ category: categoryProduct, userId: userId });
		console.log(categoryProduct);

		getProducts(url.toString())
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

	const deleteProductHandler = (id) => {
		const url = new URLSearchParams({ category: categoryProduct, userId: userId });
		deleteProduct({ id: id, userId: userId })
			.unwrap()
			.then((data) => {
				getProducts(url.toString())
					.unwrap()
					.then((data) => {
						console.log(data);
						dispatch(setProducts(data));
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => console.log(err.data.message));
	};

	return (
		<ProductsCont>
			<ProductHead>
				<FormTitle>Товары</FormTitle>
			</ProductHead>
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
				<ProductBlock>
					<FormHead>
						<FormTitle>{categoryProduct}</FormTitle>

						<ButtonElem
							onClick={(e) => {
								navigate("../addProduct", { replace: true });
							}}
						>
							Новый товар
						</ButtonElem>
					</FormHead>
					<ProductList>
						<ListHead>
							<ItemCell>Наименование</ItemCell>
							<ItemCell>Цена</ItemCell>
							<ItemCell>Ед.</ItemCell>
							<ItemCell>Арт.</ItemCell>
							<ItemCell>Цвет</ItemCell>
							<ItemCell>Описание</ItemCell>
							<ItemCell></ItemCell>
						</ListHead>
						<ul>
							{products.map((res) => {
								return (
									<ProductItem key={res.id}>
										<EditLink to="../editProduct" state={{ props: res }}>
											{res.title}
										</EditLink>
										<ItemCell>{res.price}</ItemCell>
										<ItemCell>{res.unit}</ItemCell>
										<ItemCell>{res.article}</ItemCell>
										<ItemCell>
											<ColorCell color={res.color} />
										</ItemCell>
										<ItemCell>{res.description}</ItemCell>
										<DeletedButton onClick={(e) => deleteProductHandler(res.id)}>
											<AiOutlineClose color="red" size={20} />
										</DeletedButton>
									</ProductItem>
								);
							})}
						</ul>
					</ProductList>
				</ProductBlock>
			</ProductsContent>
		</ProductsCont>
	);
};
