import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";
import { StringValueObject } from "../../shared/domain/value-object/StringValueObject";

export class UserEmail extends StringValueObject {
	private readonly validEmailRegExp =
		/^(?=.*[@](?:gmail\.com|hotmail\.com)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/;

	constructor(value: string) {
		super(value);

		this.ensureEmailIsValid(value);
	}

	private ensureEmailIsValid(value: string) {
		if (!this.validEmailRegExp.test(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid email`);
		}
	}
}
