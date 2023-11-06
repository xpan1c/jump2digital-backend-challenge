import bcrypt from "bcrypt";

import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";
import { StringValueObject } from "../../shared/domain/value-object/StringValueObject";

export class UserPassword extends StringValueObject {
	constructor(value: string, private readonly isHashed: boolean = false) {
		super(isHashed ? value : UserPassword.encrypt(value));
		this.ensurePasswordIsValid(value);
	}

	private static encrypt(value: string): string {
		return bcrypt.hashSync(value, 10);
	}

	async compare(plainTextPassword: string): Promise<boolean> {
		return await bcrypt.compare(plainTextPassword, this.value);
	}

	private ensurePasswordIsValid(value: string) {
		if (value.length < 4) {
			throw new InvalidArgumentError(
				`The password is not valid. It should be at least 6 characters long.`
			);
		}
	}
}
