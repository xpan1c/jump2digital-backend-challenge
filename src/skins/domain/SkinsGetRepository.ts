import { Skins } from "./Skins";

export abstract class SkinGetRepository {
	abstract findAll(): Promise<Skins>;
}
