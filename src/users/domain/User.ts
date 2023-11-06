import { Skin } from "../../skins/domain/Skin";
import { Skins } from "../../skins/domain/Skins";
import { UserAccount } from "./UserAccount";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserPassword } from "./UserPassword";

export class User {
	private readonly id: UserId;
	private readonly name: UserName;
	private readonly email: UserEmail;
	private readonly account: UserAccount;
	private readonly skins: Skins;
	private password?: UserPassword;

	constructor(
		email: string,
		name: string,
		skins?: { name: string; price: number; color: string; type: string; id: string }[],
		account?: number,
		password?: string,
		id?: string
	) {
		this.id = new UserId(id);
		this.email = new UserEmail(email);
		this.name = new UserName(name);
		this.skins = skins ? new Skins(skins) : new Skins();
		this.account = new UserAccount(account);
		password ? (this.password = new UserPassword(password)) : undefined;
	}

	static fromPrimitives(plainData: {
		id: string;
		name: string;
		email: string;
		skins?: { name: string; price: number; color: string; type: string; id: string }[];
		account?: number;
		password?: string;
	}): User {
		return new User(
			plainData.email,
			plainData.name,
			plainData.skins,
			plainData.account,
			plainData.password ? plainData.password : undefined,
			plainData.id
		);
	}

	set hashedPassword(value: string) {
		this.password = new UserPassword(value, true);
	}

	static fromPrimitivesHashedPassword(plainData: {
		id: string;
		name: string;
		email: string;
		skins?: { name: string; price: number; color: string; type: string; id: string }[];
		account?: number;
		password: string;
	}): User {
		const user = new User(
			plainData.email,
			plainData.name,
			plainData.skins,
			plainData.account,
			undefined,
			plainData.id
		);
		user.hashedPassword = plainData.password;

		return user;
	}

	get idValue(): string {
		return this.id.value;
	}

	get nameValue(): string {
		return this.name.value;
	}

	buySkin(skin: Skin): void {
		this.account.subtractedBalance(skin.priceValue);
		this.skins.addSkin(skin);
	}

	async comparePassword(value: string): Promise<boolean> {
		return (await this.password?.compare(value)) ?? false;
	}

	toPrimitives(): any {
		return {
			id: this.id.value,
			name: this.name.value,
			email: this.email.value,
			account: this.account.balanceValue,
			password: this.password ? this.password.value : undefined,
		};
	}
}
