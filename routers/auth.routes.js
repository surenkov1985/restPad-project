const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const passwordGenerator = require("password-generator");

const jwtSecret = "mytokensecretstringalert";

const pool = mysql.createPool({
	host: "31.31.196.109",
	user: "u1588120_root",
	database: "u1588120_rest_pad_base",
	password: "Surenkov1985@gmail.com",
});

let transporter = nodemailer.createTransport({
	host: "smtp.mail.ru",
	port: 465,
	auth: {
		user: "m.surenkov@mich-man.ru",
		pass: "M9601663587",
	},
});

router.get("/", (req, res) => {
	pool.query("SELECT * FROM REST_USERS", (err, data) => {
		if (err) {
			return console.log(err);
		}

		return console.log("DATABASE CONNECT");
	});
});

router.post("/register", (req, res) => {
	if (!req.body.email) {
		return res.status(400).json({
			message: "Поле Email обязательно для заполнения",
		});
	}

	const email = req.body.email;

	pool.query("SELECT * FROM REST_USERS WHERE email=?", email, (err, data) => {
		if (err) {
			return res.status(400).json({
				message: "Ошибка запроса",
			});
		}

		if (data.length > 0) {
			return res.status(400).json({
				message: "Пользователь существует",
			});
		}

		const password = passwordGenerator(10, false);
		const hashPassword = bcrypt.hashSync(password, 10);

		transporter
			.sendMail({
				from: "m.surenkov@mich-man.ru",
				to: email,
				subject: "Регистрация в приложении RestPad",
				text: `Вы успешно зарегистрировались в приложении RestPad. Данные для входа: Login: ${email} , Password: ${password}`,
			})
			.then((result) => {
				pool.query("INSERT INTO REST_USERS(password, email, role) VALUES(?, ?, ?)", [hashPassword, email, "admin"], (err, data) => {
					if (err) {
						return res.status(400).json({
							message: "Ошибка запроса",
						});
					}

					{
						return res.status(200).json({ email: email, password: password });
					}
				});
			})
			.catch((err) => {
				console.log(err);
			});
	});
});

router.post("/login", (req, res) => {
	if (req.body.email === "") {
		console.log(req.body);
		return res.status(400).json({
			message: "Поля email и пароль обязательны для заполнения",
		});
	}

	console.log(req.body);
	const email = req.body.email;
	const password = req.body.password;

	pool.query("SELECT * FROM REST_USERS WHERE email=?", email, (err, data) => {
		if (err) {
			console.log(data, req.body);
			return res.status(400).json({
				message: "Ошибка запроса",
			});
		}
		console.log(data, req.body);

		const user = data[0];

		if (!user) {
			return res.status(400).json({
				message: "Некорректный email или пароль",
			});
		}

		const isMatch = bcrypt.compareSync(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ message: "Некорректный email или пароль" });
		}

		const accessToken = JWT.sign({ username: data[0].email, userId: data[0].id }, jwtSecret);
		return res.status(200).json({
			id: data[0].id,
			accessToken,
		});
	});
});

router.post("/addProducts", (req, res) => {
	if (!req.body.title || !req.body.price || !req.body.amount) {
		return res.status(400).json({ message: "Заполнеы не все обязательные поля" });
	}

	const { userId, title, category, article, price, amount, unit, vat, description, color } = req.body;

	pool.query(
		"INSERT INTO REST_PRODUCTS (userId, title, category, article, price, amount, unit, vat, description, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
		[userId, title, category, article, price, amount, unit, vat, description, color],
		(err, data) => {
			if (err) {
				return res.status(400).json({ message: err });
			}

			return res.status(201).json(data);
		}
	);
});

router.get("/getProducts:category", (req, res) => {
	const category = req.params.category;
	pool.query("SELECT * FROM REST_PRODUCTS WHERE category=?", category, (err, data) => {
		if (err) {
			return res.status(400).json({ message: err });
		}

		return res.status(200).json(data);
	});
});

router.delete("/deleteProduct", (req, res) => {
	pool.query("DELETE FROM REST_PRODUCTS WHERE id=?", req.body.id, (err, data) => {
		if (err) {
			return res.status(400).json({ message: err });
		}

		return res.status(200).json(data);
	});
});

router.put("/editProduct", (req, res) => {
	if (!req.body.title || !req.body.price || !req.body.amount) {
		return res.status(400).json({ message: "Заполнеы не все обязательные поля" });
	}

	const { userId, title, category, article, price, amount, unit, vat, description, color, id } = req.body;

	pool.query(
		`UPDATE REST_PRODUCTS 
		SET userId=?, title=?, category=?, article=?, price=?, amount=?, unit=?, vat=?, description=?, color=? 
		WHERE id=?`,
		[userId, title, category, article, price, amount, unit, vat, description, color, id],
		(err, data) => {
			if (err) {
				return res.status(400).json({ message: err });
			}

			return res.status(200).json(data);
		}
	);
});

router.post("/addOrder", (req, res) => {
	const data = req.body;
	const orderData = [
		JSON.stringify(data.order),
		data.order_date,
		data.date,
		data.user_id,
		data.orderSum,
		data.comments,
		data.pay_type,
		data.phone,
		data.street,
		data.house,
		data.apart,
		data.front_door,
		data.floor,
		data.discount,
	];
	const clientData = [data.user_id, data.name, data.phone, data.street, data.house, data.apart, data.front_door, data.floor];

	pool.getConnection((err, connect) => {
		connect.query("SELECT * FROM CLIENTS WHERE phone=?", [data.phone], (error, data) => {
			if (error) {
				return res.status(400).json({ message: "Error required!!" });
			}
			console.log(data);
			if (!data.length) {
				connect.query(
					"INSERT INTO CLIENTS (user_id, name, phone, street, house, apart, front_door, floor) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
					clientData,
					(err, data) => {
						if (error) {
							return res.status(400).json({ message: "Error required!!" });
						}

						orderData.push(data.insertId);
					}
				);
			} else {
				orderData.push(data[0].id);
			}

			connect.query(
				"INSERT INTO ORDERS (order_products, order_date, date, user_id, order_sum, comments, pay_type, phone, street, house, apart, front_door, floor, discount, client_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
				orderData,
				(err, data) => {
					if (error) {
						return res.status(400).json({ message: "Error required!!" });
					}
					console.log(data);
					return res.status(200).json(data);
				}
			);
			// console.log(orderData);
		});
		connect.release();
	});
});

module.exports = router;
