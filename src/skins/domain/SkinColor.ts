import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";
import { EnumValueObject } from "../../shared/domain/value-object/EnumValueObject";

export enum SkinsColors {
	Red = "RED",
	Green = "GREEN",
	Blue = "BLUE",
	Yellow = "YELLOW",
	Purple = "PURPLE",
	Orange = "ORANGE",
	Black = "BLACK",
	White = "WHITE",
	Pink = "PINK",
	Cyan = "CYAN",
}

export class SkinColor extends EnumValueObject<SkinsColors> {
	constructor(value: SkinsColors) {
		super(value, Object.values(SkinsColors));
	}

	static fromValue(value: string): SkinColor {
		for (const skinColorValue of Object.values(SkinsColors)) {
			if (value === skinColorValue.toString()) {
				return new SkinColor(skinColorValue);
			}
		}

		throw new InvalidArgumentError(`The order type ${value} is invalid`);
	}

	protected throwErrorForInvalidValue(value: SkinsColors): void {
		throw new InvalidArgumentError(`This color ${value} is invalid`);
	}
}
