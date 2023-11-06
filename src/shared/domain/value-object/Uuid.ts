import { v4 as uuidv4, validate } from "uuid";

import { InvalidArgumentError } from "../InvalidArgumentError";
import { ValueObject } from "./ValueObject";

export class Uuid extends ValueObject<string> {
	constructor(value?: string) {
		super(value ?? uuidv4());
		this.ensureIsValidUuid(this.value);
	}

	public static random(): Uuid {
		return new Uuid(uuidv4());
	}

	private ensureIsValidUuid(id: string): void {
		if (!validate(id)) {
			throw new InvalidArgumentError(`<${id}> is not a valid <${this.constructor.name}>`);
		}
	}
}
