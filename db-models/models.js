const sequalize = require("../routers/db");
const { DataTypes } = require("sequelize");

const User = sequalize.define(
	"rest_user",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "admin",
		},
	},
	{
		timestamps: false,
	}
);

const Product = sequalize.define(
	"rest_product",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		article: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		price: {
			type: DataTypes.DECIMAL(30, 0),
			allowNull: false,
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		unit: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		vat: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		description: {
			type: DataTypes.STRING(1000),
			allowNull: true,
		},
		color: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		timestamps: false,
	}
);

const Client = sequalize.define(
	"client",
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		street: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		house: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		apart: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		frontDoor: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		floor: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	},
	{
		timestamps: false,
	}
);

const Order = sequalize.define("order", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	orderProducts: {
		type: DataTypes.JSON,
		allowNull: false,
	},
	orderSum: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	comments: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	payType: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	phone: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	street: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	house: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	apart: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	frontDoor: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	floor: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
	discount: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
});

User.hasMany(Product);
Product.belongsTo(User);
User.hasMany(Client);
Client.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);
Client.hasMany(Order);
Order.belongsTo(Client);

module.exports = { User, Product, Client, Order };
