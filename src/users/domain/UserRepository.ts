import { User } from "./User";

export abstract class UserRepository {
	abstract save(user: User): Promise<void>;
	abstract search(userEmail: string): Promise<User | null>;
}
