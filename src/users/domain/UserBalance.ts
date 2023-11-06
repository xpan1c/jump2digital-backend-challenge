import { NumberValueObject } from "../../shared/domain/value-object/NumberValueObject";

export class UserBalance extends NumberValueObject {
	static initialize(): UserBalance {
		return new UserBalance(200);
	}
}
