import "dotenv/config";

import { Dialect, Sequelize } from "sequelize";

import { skinInstance } from "../../../../../skins/infrastructure/persistences/sequelieze/skinInstance";
import { userInstance } from "../../../../../users/infrastructure/persistences/sequelize/userInstance";

const username = process.env.MYSQL_USER ?? "";
const password = process.env.MYSQL_PASSWORD ?? "";
const database = process.env.DATABASE_NAME ?? "";
const testDatabase = process.env.DATABASE_NAME_TEST ?? "";
const db = process.env.NODE_ENV === "test" ? testDatabase : database;
const host = process.env.MYSQL_HOST ?? "localhost";
const port = parseInt(process.env.MYSQL_PORT ?? "", 10) || 3306;
export const logBuffer: string[] = [];
const dialect: Dialect = "mysql";
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = function () {};
const options = {
	dialect,
	host,
	port,
	pool: {
		max: 5,
		min: 0,
		idle: 1,
	},
	logging: process.env.NODE_ENV === "dev" ? console.log : noop,
};
export const sequelize = new Sequelize(db, username, password, options);
function defineModels(sequelize: Sequelize) {
	const User = sequelize.define("user", userInstance, { timestamps: false });
	const Skin = sequelize.define("skin", skinInstance, {
		timestamps: true,
		updatedAt: false,
	});

	return { User, Skin };
}
export const { User, Skin } = defineModels(sequelize);
function defineRelations() {
	Skin.belongsTo(User);
	User.hasMany(Skin);
}
defineRelations();
sequelize
	.authenticate()
	.then(() => console.log("Connection has been established successfully."))
	.catch((error) => console.error("Unable to connect to the database:", error));

sequelize
	.sync()
	.then(() => console.log("Database & tables created!"))
	.catch((error) => console.error("Unable to connect to the database:", error));
