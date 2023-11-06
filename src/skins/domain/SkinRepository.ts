import { Skin } from "./Skin";
import { SkinColor } from "./SkinColor";
import { SkinId } from "./SkinId";
import { Skins } from "./Skins";

export abstract class SkinRepository {
	abstract save(skin: Skin): Promise<void>;
	abstract search(id: SkinId): Promise<Skin | null>;
	abstract updateColor(id: SkinId, color: SkinColor): Promise<void>;
	abstract delete(id: SkinId): Promise<void>;
	abstract saveMultiple(skins: Skins): Promise<void>;
}
