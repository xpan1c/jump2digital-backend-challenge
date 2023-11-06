import { SkinRepository } from "../domain/SkinRepository";
import { SkinGetRepository } from "../domain/SkinsGetRepository";

type SkinBuyRequest = { id: string; name: string };
export class SkinsBuy {
	constructor(
		private readonly skinRepository: SkinRepository,
		private readonly skinGetRepository: SkinGetRepository
	) {}

	async run({ id, name }: SkinBuyRequest): Promise<void> {
		const skins = await this.skinGetRepository.findAll();
		const skin = skins.findByName(name);
		if (!skin) {
			throw new Error(`There is no skins with ${name} name`);
		}
		skin.userIdValue = id;
		await this.skinRepository.save(skin);
	}
}
