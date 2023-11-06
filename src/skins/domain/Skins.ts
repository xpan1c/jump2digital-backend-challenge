import { Skin } from "./Skin";

export class Skins {
	private readonly value: Skin[];
	constructor(value?: { name: string; price: number; color: string; type: string; id?: string }[]) {
		const skins = value ? value.map((_) => new Skin(_.name, _.price, _.color, _.type, _.id)) : [];
		this.value = skins;
	}

	findByName(value: string): Skin | null {
		const skin = this.value.find((skin) => skin.nameValue === value);

		return skin ? skin : null;
	}

	addSkin(skin: Skin): void {
		this.value.push(skin);
	}

	toPrimitives(): any {
		return this.value.map((skin) => skin.toPrimitiveWithoutId());
	}
}
