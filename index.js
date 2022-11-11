require("dotenv").config();
const express = require("express");
const router = require("./routers/auth.routes");
const cors = require("cors");
const sequelize = require("./routers/db");

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};

app.use(express.json({ extended: true }));

app.use(cors(corsOptions));

app.use("/", router);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log("SERVER LAUNCHED");
		});
	} catch (error) {
		console.log(error);
	}
};

start();
