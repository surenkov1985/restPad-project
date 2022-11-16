require("dotenv").config();
const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const passwordGenerator = require("password-generator");
const { Op } = require("sequelize");

const { User, Product, Client, Order } = require("../db-models/models");

const jwtSecret = process.env.JWT_SECRET;

let transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
});

router.get("/", (req, res) => {
	User.findAll()
		.then((result) => {
			return console.log("DATABASE CONNECT");
		})
		.catch((err) => {
			return console.log(err);
		});
});

router.post("/register", (req, res) => {
	if (!req.body.email) {
		return res.status(400).json({
			message: "Поле Email обязательно для заполнения",
		});
	}

	const email = req.body.email;

	User.findOne({ where: { email: email } })
		.then((user) => {
			if (user) {
				return res.status(400).json({
					message: "Пользователь существует",
				});
			}

			const password = passwordGenerator(10, false);
			const hashPassword = bcrypt.hashSync(password, 10);

			transporter
				.sendMail({
					from: process.env.MAIL_USER,
					to: email,
					subject: "Регистрация в приложении RestPad",
					text: `Вы успешно зарегистрировались в приложении RestPad. Данные для входа: Login: ${email} , Password: ${password}`,
				})
				.then((result) => {
					User.create({ email: email, password: hashPassword, role: "admin" })
						.then((result) => {
							return res.status(200).json({ email: email, password: password });
						})
						.catch((err) => {
							return res.status(400).json({
								message: "Ошибка запроса",
							});
						});
				})
				.catch((err) => {
					return res.status(400).json({
						message: "Ошибка запроса",
					});
				});
		})
		.catch((err) => {
			return res.status(400).json({
				message: "Ошибка запроса",
			});
		});
});

router.post("/login", (req, res) => {
	if (req.body.email === "") {
		return res.status(400).json({
			message: "Поля email и пароль обязательны для заполнения",
		});
	}

	const email = req.body.email;
	const password = req.body.password;

	User.findOne({
		where: {
			email: email,
		},
	})
		.then((user) => {
			if (!user) {
				return res.status(400).json({
					message: "Некорректный email или пароль",
				});
			}

			const isMatch = bcrypt.compareSync(password, user.password);

			if (!isMatch) {
				return res.status(400).json({ message: "Некорректный email или пароль" });
			}

			const accessToken = JWT.sign({ username: user.email, userId: user.id }, jwtSecret);
			return res.status(200).json({
				id: user.id,
				accessToken,
			});
		})
		.catch((err) => {
			return res.status(400).json({
				message: "Ошибка запроса",
			});
		});
});

router.post("/addProducts", (req, res) => {
	if (!req.body.title || !req.body.price || !req.body.amount) {
		return res.status(400).json({ message: "Заполнеы не все обязательные поля" });
	}

	const { userId, title, category, article, price, amount, unit, vat, description, color } = req.body;

	User.findByPk(userId)
		.then((user) => {
			if (!user) {
				return res.status(400).json({ message: "Пользователь не найден" });
			}
			Product.create({
				restUserId: user.id,
				title: title,
				category: category,
				article: article,
				price: Number(price),
				amount: Number(amount),
				unit: unit,
				vat: vat,
				description: description,
				color: color,
			})
				.then((result) => {
					return res.status(201).json(result);
				})
				.catch((err) => {
					return res.status(400).json(err);
				});
		})
		.catch((err) => {
			return res.status(400).json(err);
		});
});

router.get("/getProducts?", (req, res) => {
	const category = req.query.category;
	
	const userId = req.query.userId;

	User.findByPk(userId)
		.then((result) => {
			Product.findAll({
				where: {
					restUserId: userId,
					category: category,
				},
			})
				.then((data) => {
					return res.status(200).json(data);
				})
				.catch((err) => {
					return res.status(400).json({ message: err });
				});
		})
		.catch((err) => {
			return res.status(400).json({ message: err });
		});
});

router.delete("/deleteProduct?", (req, res) => {
	const { id, userId } = req.body;

	Product.destroy({
		where: {
			restUserId: userId,
			id: id,
		},
	})
		.then((data) => {
			return res.status(200).json(data);
		})
		.catch((err) => {
			return res.status(400).json({ message: err });
		});
});

router.put("/editProduct", (req, res) => {
	if (!req.body.title || !req.body.price || !req.body.amount) {
		return res.status(400).json({ message: "Заполнеы не все обязательные поля" });
	}

	const { restUserId, title, category, article, price, amount, unit, vat, description, color, id } = req.body;

	Product.update(
		{
			title: title,
			category: category,
			article: article,
			price: price,
			amount: amount,
			unit: unit,
			vat: vat,
			description: description,
			color: color,
		},
		{
			where: {
				id: id,
				restUserId: restUserId,
			},
		}
	)
		.then((data) => {
			return res.status(200).json(data);
		})
		.catch((err) => {
			return res.status(400).json({ message: err });
		});
});

router.post("/addOrder", (req, res) => {
	const data = req.body;

	User.findByPk(data.user_id)
		.then((user) => {
			Client.findOrCreate({
				where: {
					phone: data.phone,
					restUserId: data.user_id,
				},
			})
				.then((client) => {
					Order.create({
						restUserId: data.user_id,
						clientId: client[0].id,
						orderProducts: JSON.stringify(data.order),
						createdAt: data.date || "",
						orderSum: data.orderSum,
						comments: data.comments,
						payType: data.pay_type,
						phone: data.phone,
						street: data.street,
						house: data.house,
						apart: data.apart,
						frontDoor: data.front_door,
						floor: data.floor,
						discount: data.discount,
					})
						.then((data) => {
							return res.status(200).json(data);
						})
						.catch((err) => {
							return res.status(400).json(err);
						});
				})
				.catch((err) => {
					return res.status(400).json(err);
				});
		})
		.catch((err) => {
			return res.status(400).json(err);
		});
});

router.get("/getOrders?", (req, res) => {
	
	const date = new Date(req.query.date);
	const endDate = req.query.endDate ? new Date(req.query.endDate) : new Date(req.query.date);
	const user_id = req.query.user_id;
	endDate.setHours(23, 59, 59);

	console.log(date, req.query.endDate);

	let day = new Date(endDate);

	Order.findAll({
		where: {
			restUserId: user_id,
			createdAt: {
				[Op.between]: [date, endDate],
			},
		},
		order: [["createdAt", "DESC"]],
	})
		.then((data) => {
			return res.status(200).json(data);
		})
		.catch((err) => {
			return res.status(400).json({ message: err });
		});
});

router.get("/getFirstOrder?", (req, res) => {
	const user_id = req.query.user_id;

	Order.findOne({
		where: {
			restUserId: user_id,
		},
	})
		.then((data) => {
			return res.status(200).json(data);
		})
		.catch((err) => {
			return res.status(400).json({ message: "Ошибка сервера" });
		});
});

module.exports = router;
