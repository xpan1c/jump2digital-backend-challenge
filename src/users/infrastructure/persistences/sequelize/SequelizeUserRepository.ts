import { SequelizeRepository } from "../../../../shared/infrastructure/persistence/sequelize/SequelizeRepository";
import { User } from "../../../domain/User";
import { UserRepository } from "../../../domain/UserRepository";

export class SequelizeUserRepository extends SequelizeRepository implements UserRepository {
	async search(userEmail: string): Promise<User | null> {
		const user = await this.models[0].findOne({ where: { email: userEmail } });
		if (!user) {
			return null;
		}

		const { id, name, email, account, password } = user.dataValues;

		return User.fromPrimitivesHashedPassword({ id, name, email, account, password });
	}

	async save(user: User): Promise<void> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		await this.models[0].create(user.toPrimitives());
	}
}
