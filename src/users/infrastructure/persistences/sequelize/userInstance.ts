import { DataTypes, ModelAttributes } from "sequelize";

export const userInstance: ModelAttributes = {
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	account: { type: DataTypes.INTEGER, allowNull: false },
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
};
