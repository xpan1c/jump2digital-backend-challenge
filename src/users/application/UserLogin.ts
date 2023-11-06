import { UserRepository } from "../domain/UserRepository";

type UserLoginRequest = { email: string; password: string };
type UserLoginResponse = { id: string; name: string };
export class UserLogin {
	constructor(private readonly repository: UserRepository) {}

	async run({ email, password }: UserLoginRequest): Promise<UserLoginResponse> {
		const user = await this.repository.search(email);
		if (!user) {
			throw new Error("Invalid Credentials");
		}

		if (!(await user.comparePassword(password))) {
			throw new Error("Invalid Credentials");
		}

		return { id: user.idValue, name: user.nameValue };
	}
}
