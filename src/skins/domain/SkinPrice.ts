import { NumberValueObject } from "../../shared/domain/value-object/NumberValueObject";

export class SkinPrice extends NumberValueObject {
	static initialize(): SkinPrice {
		return new SkinPrice(20);
	}
}
