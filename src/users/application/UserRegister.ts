import { User } from "../domain/User";
import { UserRepository } from "../domain/UserRepository";

type UserCreatorRequest = { name: string; email: string; password: string };

export class UserRegister {
	constructor(private readonly repository: UserRepository) {}

	async run({ name, email, password }: UserCreatorRequest): Promise<void> {
		const user = new User(email, name, undefined, undefined, password);

		await this.repository.save(user);
	}
}
