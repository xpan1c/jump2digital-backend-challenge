/* eslint-disable @typescript-eslint/require-await */
import { SequelizeRepository } from "../../../../shared/infrastructure/persistence/sequelize/SequelizeRepository";
import { Skin } from "../../../domain/Skin";
import { SkinColor } from "../../../domain/SkinColor";
import { SkinId } from "../../../domain/SkinId";
import { SkinRepository } from "../../../domain/SkinRepository";
import { Skins } from "../../../domain/Skins";

export class SequelizeSkinRepository extends SequelizeRepository implements SkinRepository {
	async save(skin: Skin): Promise<void> {
		await this.models[0].create({
			id: skin.idValue,
			name: skin.nameValue,
			price: skin.priceValue,
			color: skin.colorValue,
			type: skin.typeValue,
			userId: skin.userIdValue,
		});
	}

	async search(id: SkinId): Promise<Skin | null> {
		throw new Error("Method not implemented.");
	}

	async updateColor(id: SkinId, color: SkinColor): Promise<void> {
		throw new Error("Method not implemented.");
	}

	async delete(id: SkinId): Promise<void> {
		throw new Error("Method not implemented.");
	}

	async saveMultiple(skins: Skins): Promise<void> {
		throw new Error("Method not implemented.");
	}
}
