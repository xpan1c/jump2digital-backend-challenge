import { DataTypes, ModelAttributes } from "sequelize";

import { SkinsColors } from "../../../domain/SkinColor";
import { SkinTypes } from "../../../domain/SkinType";

export const skinInstance: ModelAttributes = {
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	color: {
		type: DataTypes.ENUM(...Object.values(SkinsColors)),
		allowNull: false,
	},
	type: {
		type: DataTypes.ENUM(...Object.values(SkinTypes)),
		allowNull: false,
	},
};
