const express = require("express");
const router = require("./routers/auth.routes");
const cors = require("cors");

const app = express();
const PORT = 5000;

const corsOptions = {
	origin: "*",
	credentials: true,
	optionSuccessStatus: 200,
};

app.use(express.json({ extended: true }));

app.use(cors(corsOptions));

app.use("/", router);

app.listen(PORT, () => {
	console.log("SERVER LAUNCHED");
});
