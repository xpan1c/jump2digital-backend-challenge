import { SkinGetRepository } from "../domain/SkinsGetRepository";

type SkinsGetterResponse = { name: string; type: string; price: number; color: string }[];
export class SkinsGetter {
	constructor(private readonly repository: SkinGetRepository) {}
	async run(): Promise<SkinsGetterResponse> {
		const skins = await this.repository.findAll();

		return skins.toPrimitives();
	}
}
