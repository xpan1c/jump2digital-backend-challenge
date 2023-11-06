import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";
import { EnumValueObject } from "../../shared/domain/value-object/EnumValueObject";

export enum SkinTypes {
	Weapon = "WEAPON",
	Armor = "ARMOR",
	Shield = "SHIELD",
}

export class SkinType extends EnumValueObject<SkinTypes> {
	constructor(value: SkinTypes) {
		super(value, Object.values(SkinTypes));
	}

	static fromValue(value: string): SkinType {
		for (const skinTypeValue of Object.values(SkinTypes)) {
			if (value === skinTypeValue.toString()) {
				return new SkinType(skinTypeValue);
			}
		}

		throw new InvalidArgumentError(`The order type ${value} is invalid`);
	}

	protected throwErrorForInvalidValue(value: SkinTypes): void {
		throw new InvalidArgumentError(`This skin type ${value} is invalid`);
	}
}
