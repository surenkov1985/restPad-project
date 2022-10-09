import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
	AuthLinks,
	Container,
	HeaderBlock,
	MainBlock,
	MainContainer,
} from "./style";

export const Layout = () => {
	const isAuth = useSelector((state) => state.data.isAuth);

	return (
		<>
			<HeaderBlock>
				<Container>
					{isAuth && (
						<>
							<AuthLinks>
								<NavLink to="addOrder">Новый заказ</NavLink>
								<NavLink to="products">Товары</NavLink>
								<NavLink to="admin">Личный кабинет</NavLink>
							</AuthLinks>
							<AuthLinks>
								<Link to="login">Выход</Link>
							</AuthLinks>
						</>
					)}
					{!isAuth && (
						<AuthLinks>
							<Link to="register">Регистрация</Link>
							<Link to="login">Вход</Link>
						</AuthLinks>
					)}
				</Container>
			</HeaderBlock>
			<MainBlock>
				<MainContainer>
					<Outlet />
				</MainContainer>
			</MainBlock>
		</>
	);
};
