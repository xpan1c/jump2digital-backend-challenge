import { UserBalance } from "./UserBalance";

export class UserAccount {
	private balance: UserBalance;
	constructor(value?: number) {
		this.balance = value ? new UserBalance(value) : UserBalance.initialize();
	}

	get balanceValue(): number {
		return this.balance.value;
	}

	subtractedBalance(value: number): void {
		this.balance = new UserBalance(this.balance.value - value);
	}
}
