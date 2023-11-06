import { UserId } from "../../users/domain/UserId";
import { SkinColor } from "./SkinColor";
import { SkinId } from "./SkinId";
import { SkinName } from "./SkinName";
import { SkinPrice } from "./SkinPrice";
import { SkinType } from "./SkinType";

export class Skin {
	private readonly id: SkinId;
	private readonly name: SkinName;
	private readonly price: SkinPrice;
	private color: SkinColor;
	private readonly type: SkinType;
	private userId?: UserId;
	constructor(
		name: string,
		price: number,
		color: string,
		type: string,
		userId?: string,
		id?: string
	) {
		this.id = new SkinId(id);
		this.name = new SkinName(name);
		this.price = new SkinPrice(price);
		this.userId = userId ? new UserId(userId) : undefined;
		this.color = SkinColor.fromValue(color);
		this.type = SkinType.fromValue(type);
	}

	set userIdValue(value: string) {
		this.userId = new UserId(value);
	}

	get userIdValue(): string {
		return this.userId?.value ?? "";
	}

	set changeColor(value: string) {
		this.color = SkinColor.fromValue(value);
	}

	get nameValue(): string {
		return this.name.value;
	}

	get priceValue(): number {
		return this.price.value;
	}

	get idValue(): string {
		return this.id.value;
	}

	get colorValue(): string {
		return this.color.value;
	}

	get typeValue(): string {
		return this.type.value;
	}

	toPrimitive(): any {
		return {
			id: this.id.value,
			name: this.name.value,
			price: this.price.value,
			color: this.color.value,
			type: this.type.value,
			userId: this.userId,
		};
	}

	toPrimitiveWithoutId(): any {
		return {
			name: this.name.value,
			price: this.price.value,
			color: this.color.value,
			type: this.type.value,
		};
	}
}
