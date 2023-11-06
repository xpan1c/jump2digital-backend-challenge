import * as fs from "fs/promises";

import { Skins } from "../../../domain/Skins";
import { SkinGetRepository } from "../../../domain/SkinsGetRepository";

export class JsonSkinRepository extends SkinGetRepository {
	private readonly jsonFilePath: string;

	constructor(jsonFilePath: string) {
		super();
		this.jsonFilePath = jsonFilePath;
	}

	async findAll(): Promise<Skins> {
		const fileContent = await fs.readFile(this.jsonFilePath, "utf-8");
		const skinsArray = JSON.parse(fileContent);

		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		return new Skins(skinsArray);
	}
}
